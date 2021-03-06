// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';
import ExIcon from '../Icons/Ex';

type PropsType = {
  classes: Object,
  className: string,
  onDelete: () => void,
  data: Object,
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
    backgroundColor: ({ theme }: Theme) => theme.backgroundColorDropdown,
    color: ({ theme }: Theme) => theme.colorDropdown,
    padding: '5px 10px',
    alignItems: 'center',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'default',
  },
  label: {
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },
  ex: {
    fill: ({ theme }: Theme) => theme.colorDropdown,
    cursor: 'pointer',

    '&:hover': {
      fill: ({ theme }: Theme) => theme.colorDanger,
    },
  },
};

export default injectSheet(styles)(Chip);
