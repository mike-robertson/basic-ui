// @flow
import React, { PropTypes } from 'react';

import FormInput from '../FormInput';

const TextInput = ({
  className,
  label,
  value,
  onChange,
  placeholder,
  onClick,
}: TextInputProps) => (
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

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onClick: PropTypes.func,
};

export default TextInput;
