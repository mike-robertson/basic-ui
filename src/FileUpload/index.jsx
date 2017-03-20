import React, { PropTypes } from 'react';
// import classnames from 'classnames';
import injectSheet from 'react-jss';

import LabeledItem from '../LabeledItem';

const FileUpload = ({
  // classes,
  className,
  label,
  onChange,
}) => (
  <LabeledItem label={label} className={className}>
    <input type="file" onChange={onChange} />
  </LabeledItem>
);

FileUpload.propTypes = {
  // classes: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

const styles = {};

export default injectSheet(styles)(FileUpload);
