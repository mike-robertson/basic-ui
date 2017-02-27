import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import uuid from 'uuid/v4';
import jss from './basic-jss';
import * as palette from './palette';

const { classes } = jss.createStyleSheet({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  input: {
    outline: 'none',
    backgroundColor: palette.colorBlackLight,
    color: palette.textColorPrimary,
    border: `2px solid ${palette.colorMutedLight}`,
    padding: 5,
    fontSize: 16,
    transition: 'all ease-out 300ms',
    '&:focus': {
      borderColor: palette.colorBlue,
    },
  },
}).attach();


class FormInput extends PureComponent {
  constructor() {
    super();
    this.id = uuid();
  }

  render() {
    const { tag, onChange, label, type = 'text', value, className, placeholder } = this.props;
    const Tag = tag || 'input';
    const isInput = Tag === 'input' || Tag === 'textarea';
    return (
      <div className={classes.container}>
        {label && <label htmlFor={this.id}>{label}</label>}
        <Tag
          id={this.id}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={classnames(classes.container, isInput && !className && classes.input, className)}
        />
      </div>
    );
  }
}

FormInput.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

export default FormInput;
