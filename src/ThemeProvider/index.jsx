import { Component, PropTypes } from 'react';

class ThemeProvider extends Component {
  getChildContext() {
    return { theme: this.props.theme };
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
};

ThemeProvider.childContextTypes = {
  theme: PropTypes.object,
};

export default ThemeProvider;
