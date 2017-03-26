import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';


import { injectSheet } from '../themes';

class DropdownItem extends PureComponent {
  render() {
    const {
      classes,
      className,
      item,
      onClick,
    } = this.props;

    return (
      <div className={classnames(classes.container, className)} onClick={() => onClick(item.id)}>
        {item.label}
      </div>
    );
  }
}

DropdownItem.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

export const styles = {
  container: {
    width: '100%',
    padding: 5,
    cursor: 'pointer',
    ['border-Bottom']: palette => palette.dashedBorder,

    '&:hover': {
      ['background-Color']: palette => palette.lightHoverBackgroundColor,
    },

    '&:last-child': {
      borderBottom: 'none',
    },
  },
};

export default injectSheet(styles)(DropdownItem);
