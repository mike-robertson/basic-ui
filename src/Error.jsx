import React, { PropTypes } from 'react';
import classnames from 'classnames';
import jss from './basic-jss';
import * as palette from './palette';

const { classes } = jss.createStyleSheet({
  container: {
    padding: 15,
    border: palette.borderDanger,
    color: palette.colorDanger,
    display: 'flex',
    maxWidth: 350,
  },
}).attach();

const Error = ({ error, message, className }) => error && (
  <div className={classnames(classes.container, className)}>
    <div>{message || JSON.stringify(error, null, 2)}</div>
  </div>
);

Error.propTypes = {
  error: PropTypes.object,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default Error;
