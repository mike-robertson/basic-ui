import React, { PropTypes } from 'react';
import classnames from 'classnames';

import * as palette from './palette';
import jss from './basic-jss';

const { classes } = jss.createStyleSheet({
  fieldset: {
    '& > fieldset': {
      border: 'none',
      padding: 0,
      margin: 0,
      '&:disabled input': {
        backgroundColor: palette.colorMuted,
        '&:hover': {
          backgroundColor: palette.colorMuted,
          borderColor: palette.colorMutedLight,
          cursor: 'not-allowed',
        },
      },
    },
  },
}).attach();

const Form = ({ children, onSubmit, disabled, className }) => (
  <form onSubmit={onSubmit} className={classnames(classes.fieldset, className)}>
    <fieldset disabled={disabled && 'disabled'}>
      {children}
    </fieldset>
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Form;
