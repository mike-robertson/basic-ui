import React from 'react';
import classnames from 'classnames';

import { injectSheet } from '../themes';

const ArrowRight = ({ className, classes, ...props }) => (
  <svg className={classnames(classes.container, className)} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
    <path d="M0-.25h24v24H0z" fill="none" />
  </svg>
);

const styles = {
  container: {
    fill: palette => palette.textColorPrimary,
  },
};

export default injectSheet(styles)(ArrowRight);
