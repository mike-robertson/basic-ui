import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import theme from '../themes';

export const styles = {
  container: {
    padding: theme.palette.tableCellPadding,
    borderBottom: theme.palette.border,
    borderTop: theme.palette.border,
    borderLeft: theme.palette.dashedBorder,
    borderRight: theme.palette.dashedBorder,
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
