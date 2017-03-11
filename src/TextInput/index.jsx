// @flow
import React, { PureComponent, PropTypes } from 'react';
import FormInput from '../FormInput';

class TextInput extends PureComponent {
  props: TextInputProps;

  render(): React.Element<any> {
    const {
      className,
      label,
      value,
      onChange,
      placeholder,
      onClick,
    } = this.props;

    return (
      <FormInput
        type="text"
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        onClick={onClick}
      />
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onClick: PropTypes.func,
};

export default TextInput;
