// @flow

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import injectSheet from 'react-jss';

// import { injectSheet } from '../themes';
import TableCell from '../TableCell';

export const styles = {};

type PropsType = {
  classes: Object,
  className: string,
  row: Object,
  columns: Array<TableColumn>,
};

const getValue = (row, field, displayFn) => {
  const fieldValue = typeof field === 'function'
    ? field(row)
    : row[field];
  if (displayFn && typeof displayFn === 'function') {
    return displayFn(fieldValue);
  }
  return fieldValue;
};

const TableRow = ({
  classes,
  className,
  row,
  columns,
}: PropsType) => (
  <tr className={classnames(classes.container, className)}>
    {columns.map(({ field, displayFn }) => (
      <TableCell key={field}>
        {getValue(row, field, displayFn)}
      </TableCell>
    ))}
  </tr>
);

TableRow.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  row: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object),
};

export default injectSheet(styles)(TableRow);
