// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';
import ButtonLoading from '../Icons/ButtonLoading';

type PropsType = {
  onClick: void,
  classes: any,
  className: string,
  tag: string | void,
  children: React.Element<any>,
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
    backgroundColor: ({ theme }: Theme) => theme.interactiveBGC,
    color: ({ theme }: Theme) => theme.textColorPrimary,
    border: ({ theme }: Theme) => theme.border,
    cursor: 'pointer',
    padding: ({ theme }: Theme) => theme.buttonPadding,
    transition: ({ theme }: Theme) => theme.transition,
    textTransform: 'uppercase',
    fontWeight: 700,
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',

    '&:hover': {
      backgroundColor: ({ theme }: Theme) => theme.interactiveHoverBGC,
      borderColor: ({ theme }: Theme) => theme.interactiveHoverBorderColor,
      color: ({ theme }: Theme) => theme.interactiveHoverColor,
    },

    '&:active': {
      backgroundColor: ({ theme }: Theme) => theme.interactiveActiveBGC,
    },
  },
};

export default injectSheet(styles)(Button);
