// @flow
import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import { v4 as uuid } from 'uuid';
import injectSheet from 'react-jss';
import theme from '../themes';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '1em',
    justifyContent: 'flex-end',

    '& > label': {
      color: theme.palette.textColorPrimary,
      textTransform: 'uppercase',
      order: -5,
      transition: theme.palette.transition,
    },
  },
  centerText: {
    textAlign: 'center',
  },
  input: {
    outline: 'none',
    backgroundColor: theme.palette.interactiveBGC,
    color: theme.palette.textColorPrimary,
    border: theme.palette.border,
    padding: '0.4em',
    fontSize: '1.2em',
    transition: theme.palette.transition,
    '&:focus': {
      borderColor: theme.palette.interactiveFocusBorderColor,
    },
    '&:focus ~ label': {
      color: theme.palette.interactiveFocusBorderColor,
    },
  },
};

class FormInput extends PureComponent {
  id: string;
  props: {
    tag: string | () => void,
    onChange: () => void,
    label: string,
    type: string,
    value: string | boolean | number,
    className: string,
    placeholder: string | number | boolean,
    classes: Object,
    center: boolean,
    onClick: () => void,
  };

  constructor() {
    super();
    this.id = uuid();
  }

  render(): React.Element<any> {
    const {
      tag,
      onChange,
      label,
      type = 'text',
      value,
      className,
      placeholder,
      classes,
      center,
      onClick,
    } = this.props;
    const Tag = tag || 'input';
    const isInput = Tag === 'input' || Tag === 'textarea';
    return (
      <div className={classes.container}>
        <Tag
          onClick={onClick}
          id={this.id}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={classnames(center && classes.centerText, isInput && !className && classes.input, className)}
        />
        {label && <label htmlFor={this.id}>{label}</label>}
      </div>
    );
  }
}

FormInput.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  classes: PropTypes.object,
  center: PropTypes.bool,
  onClick: PropTypes.func,
};

export default injectSheet(styles)(FormInput);
