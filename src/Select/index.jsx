// @flow

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import fuzzy from 'fuzzy';


import LabeledItem from '../LabeledItem';
import Chip from '../Chip';
import Dropdown from '../Dropdown';
import { styles as stylesTextInput } from '../FormInput';
import { injectSheet } from '../themes';

const zIndexCounter = {
  value: 1000,
  decrement() {
    this.value = this.value - 1;
  },
};

type Option = {
  id: string | number,
  label: string,
  groupId?: string | number,
};

type Group = {
  id: string | number,
  label: string,
};

type Props = {
  classes: Object,
  className?: string,
  options: Array<Option>,
  groups: Array<Group>,
  selected: Array<Option>,
  initialZIndex: ?number,
  onChange: () => void,
  label?: string,
};

const fuzzyFilter = (inputValue, selected, options): Array<Option> => fuzzy.filter(
    inputValue,
    options.filter(option => !selected.find(({ id }) => id === option.id)),
    { extract: item => item.label }
  ).map(result => result.original);

class Select extends Component {
  state: {
    inputValue: string,
    inputWidth: number,
    selected: Array<Option>,
    showDropdown: boolean,
  };
  static defaultProps: {
    initialZIndex: number,
  };
  props: Props;
  container: any;
  input: any;
  dropdown: any;
  itemJustSelected: ?boolean;
  zIndex: number;
  onClick: () => void;
  clickInComponent: () => void;
  onInputChange: () => void;
  deleteChip: () => void;
  selectItem: () => void;
  selectItemFromKeypress: () => void;
  fuzzyFilter: () => Array<Option>;


  static get defaultInputWidth(): number { return 25; }

  constructor(props: Props) {
    super();
    this.state = {
      inputValue: '',
      inputWidth: Select.defaultInputWidth,
      selected: props.selected || [],
      showDropdown: false,
    };
    this.zIndex = props.initialZIndex + zIndexCounter.value;
    // Why do we do this? What if you have multiple select components in a row? If you do zIndex
    // will be useless because the components all have the same number, so they default to regular
    // position in dom. We want the dropdown to always appear above everything though! Maybe there is a
    // better way to acheive this...
    zIndexCounter.decrement();
    this.onClick = this.onClick.bind(this);
    this.clickInComponent = this.clickInComponent.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteChip = this.deleteChip.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.selectItemFromKeypress = this.selectItemFromKeypress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.clickInComponent);
  }

  componentWillReceiveProps({ selected }: { selected: Array<Option> }) {
    if (selected !== this.props.selected) {
      this.setState({ selected });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickInComponent);
  }

  onClick() {
    this.input.focus();
    this.setState({
      showDropdown: true,
    });
  }

  clickInComponent({ target }: { target: Node }) {
    // const dropdownNode: Node = this.dropdown.node;
    if (this.container && !this.itemJustSelected && !this.container.contains(target)) {
      this.setState({
        showDropdown: false,
      });
    } else {
      this.itemJustSelected = false;
    }
  }

  // eslint-disable-next-line
  onInputChange({ target: { value: inputValue } }: { target: { value: string } }) {
    this.setState({
      inputValue,
      inputWidth: Select.defaultInputWidth + (7 * inputValue.length),
    });
  }

  deleteChip(id: string | number) {
    this.setState(({ selected }, { onChange }) => {
      const newSelected = selected.filter(item => item.id !== id);
      if (onChange) {
        onChange(newSelected);
      }

      return {
        selected: newSelected,
      };
    });
  }

  selectItem(id: string | number) {
    this.itemJustSelected = true;
    this.setState(({ selected }, { options, onChange }) => {
      const newSelected = selected.concat(options.find(option => id === option.id));
      if (onChange) {
        onChange(newSelected);
      }

      return {
        selected: newSelected,
        showDropdown: true,
        inputValue: '',
      };
    });
  }

  selectItemFromKeypress(event: Event) {
    if (event.key === 'Enter') {
      this.setState(({ inputValue, selected }, { onChange, options }) => {
        if (inputValue.length === 0) {
          return null;
        }
        const results = fuzzyFilter(inputValue, selected, options);

        if (results && results.length > 0) {
          const newSelected = selected.concat(results[0]);
          if (onChange) {
            onChange(newSelected);
          }

          return {
            seleted: newSelected,
            inputValue: '',
          };
        }
        return null;
      });
    }
  }

  render(): React.Element<any> {
    const {
      classes,
      className,
      options,
      groups,
      label,
    } = this.props;
    const {
      inputWidth,
      selected,
      inputValue,
      showDropdown,
    } = this.state;

    return (
      <LabeledItem label={label}>
        <div
          className={classnames(classes.container, { [classes.focused]: showDropdown }, className)}
          onClick={this.onClick}
          ref={container => { this.container = container; }}
          style={{ zIndex: this.zIndex }}
        >
          {selected.map(item => (
            <Chip
              key={item.id}
              data={item}
              onDelete={this.deleteChip}
              className={classes.inputItem}
            />
            ))}
          <input
            ref={input => { this.input = input; }}
            className={classnames(classes.input, classes.inputItem)}
            style={{ width: inputWidth }}
            onChange={this.onInputChange}
            value={inputValue}
            onKeyPress={this.selectItemFromKeypress}
          />
          {showDropdown && (
            <Dropdown
              ref={dropdown => { this.dropdown = dropdown; }}
              items={fuzzyFilter(inputValue, selected, options)}
              groups={groups}
              onClick={this.selectItem}
              className={classnames({ [classes.focused]: showDropdown })}
            />
          )}
        </div>
      </LabeledItem>
    );
  }
}

Select.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    groupId: PropTypes.string,
  })),
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

Select.defaultProps = {
  initialZIndex: 1000,
};

export const styles = {
  container: {
    ...stylesTextInput.input,
    padding: '0.2em',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    width: '100%',
    cursor: 'text',
  },
  input: {
    overflowX: 'hidden',
    outline: 'none',
    border: 0,
    fontSize: '1em',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: (palette: PaletteType): string => palette.textColorPrimary,
  },
  inputItem: {
    margin: '0.2em',
  },
  focused: {
    transition: (palette: PaletteType): string => palette.transition,
    borderColor: (palette: PaletteType): string => palette.interactiveFocusBorderColor,
    '& ~ label': {
      color: (palette: PaletteType): string => palette.interactiveFocusBorderColor,
    },
  },
};

export default injectSheet(styles)(Select);
