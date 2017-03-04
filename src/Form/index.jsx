import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import palette from '../themes';

const styles = {
  fieldset: {
    width: 'fit-content',

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

      '& > *': {
        marginBottom: '1em',
      },

      '& input[type=submit]': {
        width: '100%',
        alignSelf: 'flex-end',
      },
    },
  },
};

const Form = ({ children, classes, onSubmit, disabled, className }) => (
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

export default injectSheet(styles)(Form);
