import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import palette from '../themes';

const styles = {
  container: {
    padding: 15,
    border: palette.borderDanger,
    color: palette.colorDanger,
    display: 'flex',
    maxWidth: 350,
  },
};

const ErrorMessage = ({ error, classes, message, className }) => {
  if (error) {
    return (
      <div className={classnames(classes.container, className)}>
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
