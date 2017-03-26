import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';


import { injectSheet } from '../themes';
import DropdownItem from '../DropdownItem';

class DropdownGroup extends PureComponent {
  render() {
    const {
      classes,
      className,
      group,
      children,
    } = this.props;

    return (
      <div>
        <DropdownItem item={group} className={classnames(classes.container, className)} />
        {children}
      </div>

    );
  }
}

DropdownGroup.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

export const styles = {
  container: {
    'background-Color': palette => palette.backgroundColorDropdown,
    color: palette => palette.colorDropdown,
    cursor: 'auto',
    borderBottom: 'none',

    '&:hover': {
      'background-Color': palette => palette.backgroundColorDropdown,
    },
  },
};

export default injectSheet(styles)(DropdownGroup);
