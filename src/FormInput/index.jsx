// @flow
import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import { v4 as uuid } from 'uuid';
import injectSheet from 'react-jss';
import palette from '../themes';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  input: {
    outline: 'none',
    backgroundColor: palette.interactiveBGC,
    color: palette.textColorPrimary,
    border: palette.border,
    padding: 5,
    fontSize: 16,
    transition: 'all ease-out 300ms',
    '&:focus': {
      borderColor: palette.interactiveHoverBorderColor,
    },
  },
};

class FormInput extends PureComponent {
  id: string;
  props: {
    tag: string | () => void,
    onChange: () => void,
    label: string,
    type: string,
    value: string | boolean | number,
    className: string,
    placeholder: string | number | boolean,
    classes: Object,
  };

  constructor() {
    super();
    this.id = uuid();
  }

  render(): React.Element<any> {
    const { tag, onChange, label, type = 'text', value, className, placeholder, classes } = this.props;
    const Tag = tag || 'input';
    const isInput = Tag === 'input' || Tag === 'textarea';
    return (
      <div className={classes.container}>
        {label && <label htmlFor={this.id}>{label}</label>}
        <Tag
          id={this.id}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={classnames(classes.container, isInput && !className && classes.input, className)}
        />
      </div>
    );
  }
}

FormInput.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  classes: PropTypes.object,
};

export default injectSheet(styles)(FormInput);
