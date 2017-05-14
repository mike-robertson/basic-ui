// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { compose, withProps } from 'recompose';
import { injectSheet } from '../themes';
import withToggle from '../HOC/withToggle';
import ExIcon from '../Icons/Ex';

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: ({ theme }: Theme) => theme.lightHoverBackgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50%',
    minHeight: '50%',
    backgroundColor: ({ theme }: Theme) => theme.backgroundColorPrimary,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exIcon: {
    cursor: 'pointer',
    height: 36,
    width: 36,
    '&:hover': {
      fill: ({ theme }: Theme) => theme.colorDanger,
    },
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    margin: 0,
  },
  hide: {
    display: 'none',
  },
};

const enhance = compose(
  injectSheet(styles),
  withToggle,
);

const Modal = enhance(({
  backgroundClassName,
  classes,
  className,
  children,
  Controls,
  title,
  titleBarClassName,
  toggledOn: hidden,
  toggle,
  toggleOn: hide,
  toggleOff: show,
  hideName,
}) => {
  const passControls = withProps({ hidden, toggle, hide, show });
  return (
    <div>
      {Controls && React.createElement(passControls(Controls))}
      <div className={classnames(classes.background, backgroundClassName, { [classes.hide]: hidden })}>
        <div className={classnames(classes.container, className)}>
          <div className={classnames(classes.titleBar, titleBarClassName)}>
            <h1 className={classes.title}>{title}</h1>
            <ExIcon onClick={hide} className={classes.exIcon} />
          </div>
          <div className={classes.contentContainer}>
            {hideName
              ? React.Children.map(
                children,
                child => React.cloneElement(child, { [hideName]: hide }),
              )
              : children
            }
          </div>
        </div>
      </div>
    </div>
  );
});


Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  Controls: PropTypes.element,
  title: PropTypes.node,
  titleBarClassName: PropTypes.string,
  transferProps: PropTypes.bool,
};

// ModalWithClasses.propTypes = {
//   classes: PropTypes.object,
//   ...Modal.propTypes,
// };

export default Modal;
