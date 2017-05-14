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
        backgroundColor: ({ theme }) => theme.colorMuted,
        '&:hover': {
          backgroundColor: ({ theme }) => theme.colorMuted,
          borderColor: ({ theme }) => theme.colorMutedLight,
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

const Form = ({ children, classes, onSubmit, disabled, className, onSubmitSuccess }) => (
  <form
    onSubmit={onSubmitSuccess ? onSubmit(onSubmitSuccess) : onSubmit}
    className={classnames(className, classes.fieldset)}
  >
    <fieldset disabled={disabled && 'disabled'}>
      {children}
    </fieldset>
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default injectSheet(styles)(Form);
