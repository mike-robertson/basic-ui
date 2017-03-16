import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import theme from '../themes';

import Button from '../Button';

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

const FormSubmit = ({ children, className, classes, formId }) => (
  <Button
    className={classnames(classes.button, className)}
    tag="button"
    type="submit"
    form={formId}
    center
  >
    {children}
  </Button>
);

FormSubmit.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  formId: PropTypes.string,
};

export default injectSheet(styles)(FormSubmit);
