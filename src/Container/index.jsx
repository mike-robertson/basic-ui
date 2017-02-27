import React, { PropTypes } from 'react';
import classnames from 'classnames';
import jss from 'basic-jss';

const { classes } = jss.createStyleSheet({
  container: {
    margin: '15px 0',
    padding: '15px 0',
    display: 'flex',
    flexDirection: 'column',
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
}).attach();

const Container = ({ title, className, children }) => (
  <div className={classnames(classes.container, className)}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Container.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
