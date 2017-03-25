import React, { Component } from 'react';
import injectSheet from 'react-jss';
import jss from 'jss';

const injectTheme = theme =>
  styles =>
    WrappedComponent => injectSheet(styles.update ? styles : jss.createStyleSheet(styles))(class extends Component {
      constructor(props) {
        super(props);
        theme.subscribe(palette => {
          this.props.sheet.update(palette);
        });
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    });

export default injectTheme;
