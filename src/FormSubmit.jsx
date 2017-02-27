import React, { PropTypes } from 'react';

import Button from './Button';
import FormInput from './FormInput';

const FormSubmit = ({ text }) => (
  <Button
    tag={FormInput}
    value={text}
    type="submit"
  />
);

FormSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormSubmit;
