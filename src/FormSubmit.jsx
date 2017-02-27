import React, { PropTypes } from 'react';

import Button from './Button';
import FormInput from './FormInput';

const FormSubmit = ({ text, className }) => (
  <Button
    className={className}
    tag={FormInput}
    value={text}
    type="submit"
  />
);

FormSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FormSubmit;
