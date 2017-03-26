import React, { PropTypes } from 'react';
import classnames from 'classnames';


import { injectSheet } from '../themes';

import Button from '../Button';

export const styles = {
  button: {
    'border-Color': palette => palette.submitFocusBorderColor,
    color: palette => palette.submitFocusBorderColor,
    fontSize: 16,
    width: '100%',

    '& svg': {
      fill: palette => palette.submitFocusBorderColor,
      '& *': {
        fill: palette => palette.submitFocusBorderColor,
      },
    },

    '&:hover': {
      'border-Color': palette => palette.submitFocusBorderColor,
      color: palette => palette.submitFocusBorderColor,
      'background-Color': palette => palette.submitFocusBackgroundColor,
    },

    '&:focus': {
      'background-Color': palette => palette.submitFocusBackgroundColor,
    },

    '&:active': {
      'background-Color': palette => palette.submitFocusBorderColor,
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
