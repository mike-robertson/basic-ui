// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';


import ButtonLoading from '../Icons/ButtonLoading';
import { injectSheet } from '../themes';

type PropsType = {
  onClick: void,
  classes: any,
  className: string,
  tag: string | void,
  children: React.Children,
  sheet: Object,
  buttonProps?: any,
  loading: boolean,
  center?: boolean,
};


const Button = ({
  onClick,
  classes,
  className,
  tag,
  children,
  // eslint-disable-next-line no-unused-vars
  sheet,
  // eslint-disable-next-line no-unused-vars
  center,
  loading,
  ...buttonProps
}: PropsType): React.Element<any> => {
  const Tag = tag || 'button';

  return (
    <Tag
      {...buttonProps}
      onClick={onClick}
      className={classnames(classes.container, className)}
    >{loading ? <ButtonLoading /> : children}</Tag>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export const styles = {
  container: {
    outline: 'none',
    fontSize: 16,
    backgroundColor: (palette: PaletteType): string => palette.interactiveBGC,
    color: (palette: PaletteType): string => palette.textColorPrimary,
    border: (palette: PaletteType): string => palette.border,
    cursor: 'pointer',
    padding: (palette: PaletteType): string => palette.buttonPadding,
    transition: (palette: PaletteType): string => palette.transition,
    textTransform: 'uppercase',
    fontWeight: 700,
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',

    '&:hover': {
      backgroundColor: (palette: PaletteType): string => palette.interactiveHoverBGC,
      borderColor: (palette: PaletteType): string => palette.interactiveHoverBorderColor,
      color: (palette: PaletteType): string => palette.interactiveHoverColor,
    },

    '&:active': {
      backgroundColor: (palette: PaletteType): string => palette.interactiveActiveBGC,
    },
  },
};

export default injectSheet(styles)(Button);
