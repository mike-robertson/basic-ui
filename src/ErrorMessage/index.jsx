import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import theme from '../themes';

const styles = {
  container: {
    padding: 15,
    border: theme.palette.borderDanger,
    color: theme.palette.colorDanger,
    display: 'flex',
    justifyContent: 'center'
  }
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
  className: PropTypes.string
};

export default injectSheet(styles)(ErrorMessage);
