// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';


import ExIcon from '../Icons/Ex';
import { injectSheet } from '../themes';

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
    backgroundColor: (palette: PaletteType): string => palette.backgroundColorDropdown,
    color: (palette: PaletteType): string => palette.colorDropdown,
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
    fill: (palette: PaletteType): string => palette.colorDropdown,
    cursor: 'pointer',

    '&:hover': {
      fill: (palette: PaletteType): string => palette.colorDanger,
    },
  },
};

export default injectSheet(styles)(Chip);
