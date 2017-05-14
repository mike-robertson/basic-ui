import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';


export const styles = {
  container: {
    padding: ({ theme }) => theme.tableCellPadding,
    borderBottom: ({ theme }) => theme.border,
    borderTop: ({ theme }) => theme.border,
    borderLeft: ({ theme }) => theme.dashedBorder,
    borderRight: ({ theme }) => theme.dashedBorder,
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
