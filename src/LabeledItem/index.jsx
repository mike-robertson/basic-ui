// @flow
import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import { v4 as uuid } from 'uuid';
import { injectSheet } from '../themes';


export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '1em',
    justifyContent: 'flex-end',

    '& > label': {
      color: ({ theme }: Theme) => theme.textColorPrimary,
      textTransform: 'uppercase',
      order: -5,
      transition: ({ theme }: Theme) => theme.transition,
    },

    '& > *:first-child': {
      transition: ({ theme }: Theme) => theme.transition,
      '&:focus': {
        borderColor: ({ theme }: Theme) => theme.interactiveFocusBorderColor,
      },
      '&:focus ~ label': {
        color: ({ theme }: Theme) => theme.interactiveFocusBorderColor,
      },
    },
  },
};

class LabeledItem extends PureComponent {
  id: string;
  props: {
    label: string,
    className: string,
    classes: Object,
    children: React.Element<any>,
  };

  constructor() {
    super();
    this.id = uuid();
  }

  render(): React.Element<any> {
    const {
      label,
      className,
      classes,
      children,
    } = this.props;

    return (
      <div className={classnames(classes.container, className)}>
        {React.cloneElement(React.Children.only(children), { id: this.id })}
        {label && <label htmlFor={this.id}>{label}</label>}
      </div>
    );
  }
}

LabeledItem.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default injectSheet(styles)(LabeledItem);
