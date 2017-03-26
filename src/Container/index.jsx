import React, { PropTypes } from 'react';
import classnames from 'classnames';


import { injectSheet } from '../themes';

export const styles = {
  container: {
    margin: '15px 0',
    padding: '15px 0',
    display: 'flex',
    flexDirection: 'column',
    color: palette => palette.textColorPrimary,

    '& > *': {
      margin: '15px 0',
    },
    '& > *:firstChild': {
      marginTop: 0,
    },
    '& > *:lastChild': {
      marginBottom: 0,
    },
  },
};

const Container = ({ title, classes, className, children }) => (
  <div className={classnames(className, classes.container)}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Container.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default injectSheet(styles)(Container);
