import React, { PropTypes } from 'react';

import FormInput from './FormInput';

const TextInput = ({ className, label, value, onChange, placeholder }) => (
  <FormInput
    type="text"
    label={label}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
  />
);

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

export default TextInput;
