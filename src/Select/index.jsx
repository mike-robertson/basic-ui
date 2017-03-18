// @flow

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames';
import injectSheet from 'react-jss';

// import theme from '../themes';
import Chip from '../Chip';
import Dropdown from '../Dropdown';
import { styles as stylesTextInput } from '../FormInput';

type Option = {
  id: string | number,
  label: string,
  groupId?: string | number,
};

type Group = {
  id: string | number,
  label: string,
};

class Select extends Component {
  state: {
    inputValue: string,
    inputWidth: number,
    selected: Array<Option>,
    showDropdown: boolean,
  };
  props: {
    classes: Object,
    className?: string,
    options: Array<Option>,
    groups: Array<Group>,
    onChange: () => void,
  }
  container: any;
  input: any;
  dropdown: any;
  itemJustSelected: ?boolean;
  onClick: () => void;
  clickInComponent: () => void;
  onInputChange: () => void;
  deleteChip: () => void;
  selectItem: () => void;


  static get defaultInputWidth(): number { return 25; }

  constructor() {
    super();
    this.state = {
      inputValue: '',
      inputWidth: Select.defaultInputWidth,
      selected: [],
      showDropdown: false,
    };

    this.onClick = this.onClick.bind(this);
    this.clickInComponent = this.clickInComponent.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteChip = this.deleteChip.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.clickInComponent);
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
    this.setState(({ selected }) => ({
      selected: selected.filter(item => item.id !== id),
    }));
  }

  selectItem(id: string | number) {
    const { options } = this.props;
    this.itemJustSelected = true;
    this.setState(({ selected }) => ({
      selected: selected.concat(options.find(option => id === option.id)),
      showDropdown: true,
    }));
  }

  render(): React.Element<any> {
    const {
      classes,
      className,
      options,
      groups,
    } = this.props;
    const {
      inputWidth,
      selected,
      inputValue,
      showDropdown,
    } = this.state;

    return (
      <div
        className={classnames(classes.container, className)}
        onClick={this.onClick}
        ref={container => { this.container = container; }}
      >
        {selected.map(item => (
          <Chip
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
        />
        {showDropdown && (
          <Dropdown
            ref={dropdown => { this.dropdown = dropdown; }}
            items={options.filter(option => !selected.find(({ id }) => id === option.id))}
            groups={groups}
            onClick={this.selectItem}
          />
        )}
      </div>
    );
  }
}

Select.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
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

export const styles = {
  container: {
    ...stylesTextInput.input,
    padding: '0.2em',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  input: {
    overflowX: 'hidden',
    outline: 'none',
    border: 0,
    fontSize: 16,
  },
  inputItem: {
    margin: '0.2em',
  },
};

export default injectSheet(styles)(Select);
