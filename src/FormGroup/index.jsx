import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 -15px',
    '& > *': {
      margin: '0 15px',
    },
  },
};

const FormGroup = ({ children, classes, className }) => (
  <div className={classnames(className, classes.container)}>
    {children}
  </div>
);

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default injectSheet(styles)(FormGroup);
