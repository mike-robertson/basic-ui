import React, { PropTypes } from 'react';
import classnames from 'classnames';
import jss from './basic-jss';
import * as palette from './palette';

const { classes } = jss.createStyleSheet({
  container: {
    outline: 'none',
    fontSize: 16,
    backgroundColor: palette.colorBlackLight,
    color: palette.textColorPrimary,
    border: `2px solid ${palette.colorMutedLight}`,
    cursor: 'pointer',
    padding: '5px 15px',
    transition: 'all ease-out 300ms',

    '&:hover': {
      backgroundColor: palette.colorBlueDark,
      borderColor: palette.colorBlue,
    },
  },
}).attach();

const Button = ({ onClick, className, tag, children, ...buttonProps }) => {
  const Tag = tag || 'button';

  return (
    <Tag
      {...buttonProps}
      onClick={onClick}
      className={classnames(classes.container, className)}
    >{children}</Tag>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Button;
