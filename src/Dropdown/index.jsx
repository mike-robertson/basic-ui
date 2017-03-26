// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';


import DropdownItem from '../DropdownItem';
import DropdownGroup from '../DropdownGroup';
import { injectSheet } from '../themes';

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

  let renderedItem;
  if (items && items.length === 0) {
    renderedItem = <div className={classes.noItems}><i>There are no items to select.</i></div>;
  } else if (groups) {
    renderedItem = groups.map(group => (
      <DropdownGroup key={group.id} group={group}>
        {items
          .filter(item => item.groupId === group.id)
          .map(makeDropdownItem)
        }
      </DropdownGroup>
    ));
  } else {
    renderedItem = items.map(makeDropdownItem);
  }

  return (
    <div className={classnames(classes.container, className)}>
      {renderedItem}
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
    width: (theme: ThemeType): string => `calc(100% + ${theme.palette.borderWidth} + ${theme.palette.borderWidth})`,
    left: 0,
    top: (theme: ThemeType): string => `calc(100% + ${theme.palette.borderWidth})`,
    fontSize: '1em',
    maxHeight: 300,
    overflowY: 'auto',
    border: (palette: PaletteType): string => palette.border,
    borderTop: 'none',
    marginLeft: (theme: ThemeType): string => `-${theme.palette.borderWidth}`,
    overflowX: 'hidden',
    paddingRight: (theme: ThemeType): string => `calc(${theme.palette.borderWidth} + ${theme.palette.borderWidth})`,
    boxSizing: 'border-box',
    overflowWrap: 'break-word',
    zIndex: 1,
    backgroundColor: (palette: PaletteType): string => palette.textColorSecondary,
  },
  noItems: {
    padding: 5,
    cursor: 'default',
  },
};

export default injectSheet(styles)(Dropdown);
