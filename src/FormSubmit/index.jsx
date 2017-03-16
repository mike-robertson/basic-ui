import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import theme from '../themes';

import Button from '../Button';
import ButtonLoading from '../Icons/ButtonLoading';

const styles = {
  button: {
    borderColor: theme.palette.submitFocusBorderColor,
    color: theme.palette.submitFocusBorderColor,
    fontSize: 16,
    width: '100%',

    '& svg': {
      fill: theme.palette.submitFocusBorderColor,
      '& *': {
        fill: theme.palette.submitFocusBorderColor,
      },
    },

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

const FormSubmit = ({ children, className, classes, formId, loading }) => (
  <Button
    className={classnames(classes.button, className)}
    tag="button"
    type="submit"
    form={formId}
    center
  >
    {loading ? <ButtonLoading /> : children}
  </Button>
);

FormSubmit.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  formId: PropTypes.string,
  loading: PropTypes.bool,
};

export default injectSheet(styles)(FormSubmit);
