import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';



import Button from '../Button';

export const styles = {
  button: {
    borderColor: ({ theme }) => theme.submitFocusBorderColor,
    color: ({ theme }) => theme.submitFocusBorderColor,
    fontSize: 16,
    width: '100%',

    '& svg': {
      fill: ({ theme }) => theme.submitFocusBorderColor,
      '& *': {
        fill: ({ theme }) => theme.submitFocusBorderColor,
      },
    },

    '&:hover': {
      borderColor: ({ theme }) => theme.submitFocusBorderColor,
      color: ({ theme }) => theme.submitFocusBorderColor,
      backgroundColor: ({ theme }) => theme.submitFocusBackgroundColor,
    },

    '&:focus': {
      backgroundColor: ({ theme }) => theme.submitFocusBackgroundColor,
    },

    '&:active': {
      backgroundColor: ({ theme }) => theme.submitFocusBorderColor,
    },
  },
};

const FormSubmit = ({ children, className, classes, formId, loading }) => (
  <Button
    className={classnames(classes.button, className)}
    tag="button"
    type="submit"
    form={formId}
    loading={loading}
    center
  >
    {children}
  </Button>
);

FormSubmit.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  formId: PropTypes.string,
  loading: PropTypes.bool,
};

export default injectSheet(styles)(FormSubmit);
