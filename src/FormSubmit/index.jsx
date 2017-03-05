import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import palette from '../themes';

import Button from '../Button';
import FormInput from '../FormInput';

const styles = {
  button: {
    borderColor: palette.submitFocusBorderColor,
    color: palette.submitFocusBorderColor,

    '&:hover': {
      borderColor: palette.submitFocusBorderColor,
      color: palette.submitFocusBorderColor,
      backgroundColor: palette.submitFocusBackgroundColor,
    },

    '&:active': {
      backgroundColor: palette.submitFocusBorderColor,
    },

    '&:focus': {
      backgroundColor: palette.submitFocusBackgroundColor,
    },
  },
};

const FormSubmit = ({ text, className, classes }) => (
  <Button
    className={classnames(className, classes.button)}
    tag={FormInput}
    value={text}
    type="submit"
    center
  />
);

FormSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default injectSheet(styles)(FormSubmit);
