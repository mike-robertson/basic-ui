import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';
import injectSheet from 'react-jss';

// import theme from '../themes';
import Chip from '../Chip';
import Dropdown from '../Dropdown';
import { styles as stylesTextInput } from '../FormInput';

class Select extends Component {
  static get defaultInputWidth() { return 25; }

  constructor() {
    super();
    this.state = {
      inputValue: '',
      inputWidth: Select.defaultInputWidth,
      selected: [],
      showDropdown: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteChip = this.deleteChip.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  onClick() {
    this.input.focus();
    this.setState({
      showDropdown: true,
    });
  }

  onBlur() {
    this.setState({
      showDropdown: false,
    });
  }

  onInputChange({ target: { value: inputValue } }) {
    this.setState({
      inputValue,
      inputWidth: Select.defaultInputWidth + (7 * inputValue.length),
    });
  }

  deleteChip(id) {
    this.setState(({ selected }) => ({
      selected: selected.filter(item => item.id !== id),
    }));
  }

  selectItem(id) {
    const { options } = this.props;
    this.setState(({ selected }) => ({
      selected: selected.concat(options.find(option => id === option.id)),
    }));
  }

  render() {
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
      >
        {selected.map(item => <Chip data={item} onDelete={this.deleteChip} />)}
        <input
          ref={input => { this.input = input; }}
          className={classes.input}
          style={{ width: inputWidth }}
          onChange={this.onInputChange}
          value={inputValue}
        />
        {showDropdown && (
          <Dropdown
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
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',

    '& > *': {
      marginRight: 10,
    },
  },
  input: {
    overflowX: 'hidden',
    outline: 'none',
    border: 0,
    fontSize: 16,
  },
};

export default injectSheet(styles)(Select);
