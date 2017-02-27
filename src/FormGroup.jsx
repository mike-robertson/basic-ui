import React, { PropTypes } from 'react';
import classnames from 'classnames';
import jss from 'basic-jss';

const { classes } = jss.createStyleSheet({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 -15px',
    '& > *': {
      margin: '0 15px',
    },
  },
}).attach();

const FormGroup = ({ children, className }) => (
  <div className={classnames(classes.container, className)}>
    {children}
  </div>
);

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormGroup;
