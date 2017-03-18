import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import DropdownItem from '../DropdownItem';
import DropdownGroup from '../DropdownGroup';
import theme from '../themes';

const dropdownItemFactory = onClick =>
  item => <DropdownItem item={item} key={item.id} onClick={onClick} />;

const Dropdown = ({
  classes,
  className,
  items,
  groups,
  onClick,
}) => {
  const makeDropdownItem = dropdownItemFactory(onClick);

  return (
    <div className={classnames(classes.container, className)} ref={node => { this.node = node; }}>
      {groups
        ? groups.map(group => (
          <DropdownGroup group={group}>
            {items
              .filter(item => item.groupId === group.id)
              .map(makeDropdownItem)
            }
          </DropdownGroup>
        ))
        : items.map(makeDropdownItem)
      }
    </div>
  );
};

Dropdown.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    groupId: PropTypes.string,
  })),
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func,
};

const styles = {
  container: {
    position: 'absolute',
    width: `calc(100% + ${theme.palette.borderWidth} + ${theme.palette.borderWidth})`,
    left: 0,
    top: '100%',
    fontSize: '1.2em',
    maxHeight: 400,
    overflowY: 'auto',
    border: theme.palette.border,
    marginLeft: `-${theme.palette.borderWidth}`,
    overflowX: 'hidden',
    paddingRight: `calc(${theme.palette.borderWidth} + ${theme.palette.borderWidth})`,
    boxSizing: 'border-box',
    overflowWrap: 'break-word',
    zIndex: 1,
  },
};

export default injectSheet(styles)(Dropdown);
