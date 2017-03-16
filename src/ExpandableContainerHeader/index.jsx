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
  title: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5em',
    justifyContent: 'space-between',
    cursor: 'pointer',
    minHeight: 100,

    '&:hover': {
      backgroundColor: theme.palette.expandableContainerHeaderHover,
    },

    '& > div': {
      marginLeft: 15,
    },

    '& > svg': {
      marginRight: 15,
      transition: theme.palette.transition,
    },
  },
  titleAndContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
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
      <div onClick={onClick} className={classnames(classes.title, { [classes.open]: show })}>
        <div>{title}</div>
        <ArrowRightIcon height={42} width={42} />
      </div>
      {children}
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
