import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';


export const styles = {
  container: {
    padding: 15,
    border: ({ theme }) => theme.borderDanger,
    color: ({ theme }) => theme.colorDanger,
    display: 'flex',
    justifyContent: 'center',
  },
};

const ErrorMessage = ({ error, classes, message, className }) => {
  if (error) {
    return (
      <div className={classnames(className, classes.container)}>
        <div>{message || JSON.stringify(error, null, 2)}</div>
      </div>
    );
  }
  return null;
};

ErrorMessage.propTypes = {
  error: PropTypes.object,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default injectSheet(styles)(ErrorMessage);
