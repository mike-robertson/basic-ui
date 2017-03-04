import React, { PropTypes } from 'react';

import FormInput from '../FormInput';

const TextArea = ({ className, label, placeholder, value, onChange }) => (
  <FormInput
    tag="textarea"
    label={label}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className}
  />
);

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

export default TextArea;
