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
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

type PropsType = {
  initialShowValue: boolean,
  // showFlagName: string,
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
  defaultProps: PropsType;
  handleOnClick: () => void;

  constructor(props: PropsType) {
    super();
    this.state = {
      show: props.initialShowValue || false,
      noRender: !props.initialShowValue
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      show: !this.state.show,
      noRender: false
    });
  }

  render(): React.Element<any> {
    const { className, classes, title, titleContent, children } = this.props;
    const { show, noRender } = this.state;

    return (
      <div className={classnames(className, classes.container)}>
        <ExpandableContainerHeader
          onClick={this.handleOnClick}
          show={show}
          title={title}
        >
          {titleContent}
        </ExpandableContainerHeader>
        {!noRender && (
          <div className={classnames({ [classes.hide]: !show })}>
            {children}
          </div>
        )}
      </div>
    );
  }
}

ExpandableContainer.propTypes = {
  initialShowValue: PropTypes.bool
  // showFlagName: PropTypes.string,
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
