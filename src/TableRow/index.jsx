// @flow

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import TableCell from '../TableCell';

const styles = {};

type PropsType = {
  classes: Object,
  className: string,
  row: Object,
  columns: Array<TableColumn>,
};

const TableRow = ({
  classes,
  className,
  row,
  columns,
}: PropsType) => (
  <tr className={classnames(classes.container, className)}>
    {columns.map(({ field }) => {
      const presentField = Array.isArray(field)
        ? field.find(f => row[f] !== undefined && row[f] !== null)
        : field;
      console.log(presentField, Array.isArray(field), field)
      return <TableCell key={field}>{row[presentField]}</TableCell>;
    })}
  </tr>
);

TableRow.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  row: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object),
};

export default injectSheet(styles)(TableRow);
