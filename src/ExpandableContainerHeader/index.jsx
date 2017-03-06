// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import theme from '../themes';
import ArrowRightIcon from '../Icons/ArrowRight';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
  },
  titleAndContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      transition: theme.palette.transition,
    },
  },
  open: {
    '& svg': {
      transform: 'rotate(90deg)',
    },
  },
};

type PropsType = {
  className: string,
  onClick: () => void,
  classes: Object,
  title: string,
  children: React.Element<any>,
  show: boolean,
};

const ExpandableContainerHeader = ({ className, onClick, classes, title, children, show }: PropsType) => (
  <div className={classnames(classes.container, className)}>
    <div className={classes.titleAndContent}>
      <h2>{title}</h2>
      {children}
    </div>
    <div className={classnames(classes.arrowContainer, { [classes.open]: show })}>
      <ArrowRightIcon onClick={onClick} />
    </div>
  </div>
);

ExpandableContainerHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.element,
  show: PropTypes.bool.isRequired,
};

export default injectSheet(styles)(ExpandableContainerHeader);
