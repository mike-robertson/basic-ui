// @flow

import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import TableHeaderCell from '../TableHeaderCell';
import TableRow from '../TableRow';
import theme from '../themes';

const styles = {
  container: {
    border: theme.palette.border,
    borderCollapse: 'collapse',
    color: theme.palette.textColorPrimary,
  },
};

class Table extends PureComponent {
  props: {
    classes: Object,
    className: string,
    columns: Array<TableColumn>,
    data: Array<Object>,
  };
  state: {
    sorted?: string | null,
    data: Array<Object>,
    ascending?: boolean,
  };
  sort: () => void;

  constructor({ data }: { data: Array<Object> }) {
    super();
    this.state = {
      data,
      sorted: null,
    };
    this.sort = this.sort.bind(this);
  }

  sort(field: string | () => any, sortFn: () => number) {
    this.setState(prevState => {
      if (prevState.sorted === field) {
        return {
          ascending: !prevState.ascending,
          data: [...prevState.data].reverse(),
        };
      }
      const sortedData = sortFn
        ? [...prevState.data].sort((a, b) => typeof field === 'function'
            ? sortFn(field(a), field(b))
            : sortFn(a[field], b[field])
        )
        : [...prevState.data].sort((a, b) => {
          const [aValue, bValue] = typeof field === 'function'
            ? [field(a), field(b)]
            : [field[a], field[b]];
          if (aValue > bValue) {
            return 1;
          } else if (aValue < bValue) {
            return -1;
          }
          return 0;
        });
      return {
        sorted: field,
        ascending: true,
        data: sortedData,
      };
    });
  }

  componentWillReceiveProps({ data }: { data: Array<Object> }) {
    if (data !== this.props.data) {
      this.setState({
        sorted: null,
        ascending: false,
        data,
      });
    }
  }

  render(): React.Element<any> {
    const {
      classes,
      className,
      columns,
    } = this.props;
    const {
      data,
      sorted,
      ascending,
    } = this.state;

    return (
      <table className={classnames(classes.container, className)}>
        <thead>
          <tr>
            {columns.map(column => (
              <TableHeaderCell
                key={column.name}
                column={column}
                sort={this.sort}
                isSorted={sorted === column.field}
                ascending={ascending}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => <TableRow key={row.id || index} row={row} columns={columns} />)}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    field: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.func.isRequired]),
    sortFn: PropTypes.func,
  })).isRequired,
};

export default injectSheet(styles)(Table);
