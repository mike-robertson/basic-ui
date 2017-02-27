import React, { Component, PropTypes } from 'react';

import Button from 'Button';
import classnames from 'classnames';
import jss from 'basic-jss';

const { classes } = jss.createStyleSheet({
  container: {
    position: 'relative',
  },
  toggleButton: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
}).attach();

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
    const { className, showFlagName } = this.props;
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
      <div className={classnames(classes.container, className)}>
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

export default (Component, { show = false, showFlagName = 'show' } = { showFlagName: 'show', show: false }) =>
  props => (
    <ExpandableContainer initialShowValue={show} showFlagName={showFlagName}>
      <Component {...props} />
    </ExpandableContainer>
  );
