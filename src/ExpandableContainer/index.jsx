// @flow

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import theme from '../themes';
import ExpandableContainerHeader from '../ExpandableContainerHeader';

const styles = {
  container: {
    position: 'relative',
    color: theme.palette.textColorPrimary,
    width: '100%',
  },
};

type PropsType = {
  initialShowValue: boolean,
  showFlagName: string,
  className: string,
  classes: Object,
  children: any,
  title: string,
  titleContent: React.Element<any>,
};

class ExpandableContainer extends Component {
  state: {
    show: boolean,
    noRender: boolean,
  };
  props: PropsType;
  handleOnClick: () => void

  constructor(props: PropsType) {
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

  render(): React.Element<any> {
    const { className, showFlagName, classes, title, titleContent } = this.props;
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
        <ExpandableContainerHeader
          onClick={this.handleOnClick}
          show={show}
          title={title}
        >
          {titleContent}
        </ExpandableContainerHeader>
        {show && childrenWithShow}
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

// type ExpandableContainerComponentsType = {
//   Component: ReactClass<any>,
//   Header: ReactClass<any>,
// };
//
// type ExpandableContainerOptionsType = {
//   show: boolean,
//   showFlagName: string,
// };

// export const withExpandableContainer =
//   (
//     { Component, Header }: ExpandableContainerComponentsType,
//     { show = false, showFlagName = 'show' }: ExpandableContainerOptionsType = { showFlagName: 'show', show: false },
//   ) =>
//     ({ headerProps, ...props }: { headerProps: any, props: PropsType }) => (
//       <ExpandableContainerWithClasses
//         initialShowValue={show}
//         showFlagName={showFlagName}
//         header={<Header {...headerProps} />}
//       >
//         <Component {...props} />
//       </ExpandableContainerWithClasses>
//     );
