import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import theme from '../themes';

const styles = {
  container: {
    position: 'absolute',
    zIndex: 10,
    top: 50,
    right: 50,
    backgroundColor: theme.palette.interactiveBGC,
    padding: 15,
    border: theme.palette.borderSuccess,
    color: theme.palette.colorSuccess,
    display: 'flex',
    maxWidth: 'min-content',
  },
  hide: {
    animation: 'fadeOut 300ms',
    animationFillMode: 'forwards',
  },
  '@keyframes fadeOut': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
};

class SuccessMessage extends Component {
  constructor() {
    super();
    this.state = {
      hide: false,
    };
    this.hideMessage = this.hideMessage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.flag !== nextProps.flag && this.state.hide) {
      this.setState({
        hide: false,
      });
    }
  }

  setTimer() {
    setTimeout(this.hideMessage, 5000);
  }

  hideMessage() {
    this.setState({
      hide: true,
    });
  }

  render() {
    const { message, flag, classes } = this.props;
    const { hide } = this.state;
    if (flag && !hide) {
      this.setTimer();
    }
    return flag && (
      <div className={classnames(classes.container, hide && classes.hide)}>
        {message}
      </div>
    );
  }
}

SuccessMessage.propTypes = {
  message: PropTypes.string,
  flag: PropTypes.bool,
};

export default injectSheet(styles)(SuccessMessage);
