// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import theme from '../themes';

const styles = {
  container: {
    outline: 'none',
    fontSize: 16,
    backgroundColor: theme.palette.interactiveBGC,
    color: theme.palette.textColorPrimary,
    border: theme.palette.border,
    cursor: 'pointer',
    padding: theme.palette.buttonPadding,
    transition: theme.palette.transition,
    textTransform: 'uppercase',
    fontWeight: 700,
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',

    '&:hover': {
      backgroundColor: theme.palette.interactiveHoverBGC,
      borderColor: theme.palette.interactiveHoverBorderColor,
      color: theme.palette.interactiveHoverColor,
    },

    '&:active': {
      backgroundColor: theme.palette.interactiveActiveBGC,
    },
  },
};

const Button = ({
  onClick,
  classes,
  className,
  tag,
  children,
  // eslint-disable-next-line no-unused-vars
  sheet,
  ...buttonProps
}: ButtonProps): React.Element<any> => {
  const Tag = tag || 'button';

  return (
    <Tag
      {...buttonProps}
      onClick={onClick}
      className={classnames(className, classes.container)}
    >{children}</Tag>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default injectSheet(styles)(Button);
