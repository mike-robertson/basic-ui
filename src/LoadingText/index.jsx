import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import palette from '../themes';

const styles = {
  container: {
    display: 'inline',
  },
  loading: {
    color: palette.colorMuted,
  },
};

const LoadingText = ({
  children,
  displayFn = f => f,
  text = 'Loading...',
  className,
  classes,
}) => (
  <div className={classnames(classes.container, className)}>
    {displayFn(children, text)}
  </div>
);

LoadingText.propTypes = {
  displayFn: PropTypes.func,
  text: PropTypes.string,
};

export default injectSheet(styles)(LoadingText);
