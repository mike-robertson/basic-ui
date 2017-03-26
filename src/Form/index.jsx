import React, { PropTypes } from 'react';
import classnames from 'classnames';


import { injectSheet } from '../themes';

export const styles = {
  fieldset: {
    width: 'fit-content',

    '& > fieldset': {
      border: 'none',
      padding: 0,
      margin: 0,
      '&:disabled input': {
        ['background-Color']: palette => palette.colorMuted,
        '&:hover': {
          ['background-Color']: palette => palette.colorMuted,
          ['border-Color']: palette => palette.colorMutedLight,
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
  <form onSubmit={onSubmit} className={classnames(className, classes.fieldset)}>
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
