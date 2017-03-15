import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

const styles = {};

const Icon = ({
  classes,
  className,
  icon
}) => (
  <div className={classnames(classes.container, className)}>
    {icon}
  </div>
);

Icon.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.element
};

export default injectSheet(styles)(Icon);
