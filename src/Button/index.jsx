// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import palette from '../themes';

const styles = {
  container: {
    outline: 'none',
    fontSize: 16,
    backgroundColor: palette.interactiveBGC,
    color: palette.textColorPrimary,
    border: palette.border,
    cursor: 'pointer',
    padding: palette.buttonPadding,
    transition: palette.transition,
    textTransform: 'uppercase',
    fontWeight: 700,
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',

    '&:hover': {
      backgroundColor: palette.interactiveHoverBGC,
      borderColor: palette.interactiveHoverBorderColor,
      color: palette.interactiveHoverColor,
    },

    '&:active': {
      backgroundColor: palette.interactiveActiveBGC,
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
