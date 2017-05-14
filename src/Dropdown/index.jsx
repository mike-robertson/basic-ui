// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';

import DropdownItem from '../DropdownItem';
import DropdownGroup from '../DropdownGroup';


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
    width: ({ theme }: Theme) => `calc(100% + ${theme.borderWidth} + ${theme.borderWidth})`,
    left: 0,
    top: ({ theme }: Theme) => `calc(100% + ${theme.borderWidth})`,
    fontSize: '1em',
    maxHeight: 300,
    overflowY: 'auto',
    border: ({ theme }: Theme) => theme.border,
    borderTop: 'none',
    marginLeft: ({ theme }: Theme) => `-${theme.borderWidth}`,
    overflowX: 'hidden',
    paddingRight: ({ theme }: Theme) => `calc(${theme.borderWidth} + ${theme.borderWidth})`,
    boxSizing: 'border-box',
    overflowWrap: 'break-word',
    zIndex: 1,
    backgroundColor: ({ theme }: Theme) => theme.textColorSecondary,
  },
  noItems: {
    padding: 5,
    cursor: 'default',
  },
};

export default injectSheet(styles)(Dropdown);
