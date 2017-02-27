import React, { PropTypes } from 'react';
import classnames from 'classnames';
import jss from './basic-jss';
import * as palette from './palette';

const { classes } = jss.createStyleSheet({
  container: {
    display: 'inline',
  },
  loading: {
    color: palette.colorMuted,
  },
}).attach();

const LoadingText = ({
  children,
  displayFn = f => f,
  text = 'Loading...',
  className,
}) => (
  <div className={classnames(classes.container, className)}>
    {displayFn(children, text)}
  </div>
);

LoadingText.propTypes = {
  displayFn: PropTypes.func,
  text: PropTypes.string,
};

export default LoadingText;
