import React, { PropTypes } from 'react';
import classnames from 'classnames';


import { injectSheet } from '../themes';

export const styles = {
  container: {
    padding: palette => palette.tableCellPadding,
    ['border-Bottom']: palette => palette.border,
    ['border-Top']: palette => palette.border,
    ['border-Left']: palette => palette.dashedBorder,
    ['border-Right']: palette => palette.dashedBorder,
    textAlign: 'center',
  },
};

const TableCell = ({
  classes,
  className,
  children,
}) => (
  <td className={classnames(classes.container, className)}>
    {children}
  </td>
);

TableCell.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default injectSheet(styles)(TableCell);
