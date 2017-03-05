import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import palette from '../themes';
import Button from '../Button';

const styles = {
  container: {
    position: 'relative',
    color: palette.textColorPrimary,
  },
  toggleButton: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
};

export class ExpandableContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      show: props.initialShowValue,
      noRender: !props.initialShowValue,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      show: !this.state.show,
      noRender: false,
    });
  }

  render() {
    const { className, showFlagName, classes } = this.props;
    const { show, noRender } = this.state;
    const childrenWithShow = React.Children.map(
      this.props.children,
      child => React.cloneElement(
        child,
        {
          [showFlagName]: show,
          noRender,
        },
      ),
    );
    return (
      <div className={classnames(className, classes.container)}>
        {childrenWithShow}
        <Button
          className={classes.toggleButton}
          onClick={this.handleOnClick}
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      </div>
    );
  }
}

ExpandableContainer.propTypes = {
  initialShowValue: PropTypes.bool,
  showFlagName: PropTypes.string,
};

const ExpandableContainerWithClasses = injectSheet(styles)(ExpandableContainer);
export default ExpandableContainerWithClasses;

export const withExpandableContainer =
  (Component, { show = false, showFlagName = 'show' } = { showFlagName: 'show', show: false }) =>
    props => (
      <ExpandableContainerWithClasses initialShowValue={show} showFlagName={showFlagName}>
        <Component {...props} />
      </ExpandableContainerWithClasses>
    );
