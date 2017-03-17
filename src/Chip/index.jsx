// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import ExIcon from '../Icons/Ex';

import theme from '../themes';

type PropsType = {
  classes: Object,
  className: string,
  onDelete: () => void,
  data: {
    label: string,
    id: string | number,
  },
};

const Chip = ({
  classes,
  className,
  onDelete,
  data,
}: PropsType) => (
  <div className={classnames(classes.container, className)}>
    <span className={classes.label}>{data.label}</span>
    <ExIcon className={classes.ex} onClick={() => onDelete(data.id)} />
  </div>
);

Chip.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
};

const styles = {
  container: {
    backgroundColor: theme.palette.backgroundColorDropdown,
    color: theme.palette.colorDropdown,
    padding: '5px 10px',
    border: theme.palette.border,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },
  ex: {
    fill: theme.palette.colorDropdown,
    cursor: 'pointer',

    '&:hover': {
      fill: theme.palette.colorDanger,
    },
  },
};

export default injectSheet(styles)(Chip);
