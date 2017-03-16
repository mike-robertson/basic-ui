import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import theme from '../themes';

import Button from '../Button';
import FormInput from '../FormInput';

const styles = {
  button: {
    borderColor: theme.palette.submitFocusBorderColor,
    color: theme.palette.submitFocusBorderColor,
    fontSize: 16,

    '&:hover': {
      borderColor: theme.palette.submitFocusBorderColor,
      color: theme.palette.submitFocusBorderColor,
      backgroundColor: theme.palette.submitFocusBackgroundColor,
    },

    '&:focus': {
      backgroundColor: theme.palette.submitFocusBackgroundColor,
    },

    '&:active': {
      backgroundColor: theme.palette.submitFocusBorderColor,
    },
  },
};

const FormSubmit = ({ text, className, classes }) => (
  <Button
    className={classnames(classes.button, className)}
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
