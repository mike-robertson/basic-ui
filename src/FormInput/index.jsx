// @flow
import React, { PropTypes } from 'react';
import classnames from 'classnames';


import { injectSheet } from '../themes';
import LabeledItem from '../LabeledItem';

export const styles = {
  centerText: {
    textAlign: 'center',
  },
  input: {
    outline: 'none',
    backgroundColor: (palette: PaletteType): string => {
      console.log('palette', palette);
      return palette.interactiveBGC;
    },
    color: (palette: PaletteType): string => palette.textColorPrimary,
    border: (palette: PaletteType): string => palette.border,
    padding: '0.4em',
    fontSize: '1.2em',
  },
};

type Props = {
  tag: string | () => void,
  onChange: () => void,
  label: string,
  type: string,
  value: string | boolean | number,
  className: string,
  placeholder: string | number | boolean,
  classes: Object,
  center: boolean,
  onClick: () => void,
};

const FormInput = ({
  tag,
  onChange,
  label,
  type = 'text',
  value,
  className,
  placeholder,
  classes,
  center,
  onClick,
}: Props) => {
  const Tag = tag || 'input';
  const isInput = (Tag === 'input' || Tag === 'textarea') && type.toLowerCase() !== 'submit';
  return (
    <LabeledItem label={label}>
      <Tag
        onClick={onClick}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={classnames(center && classes.centerText, isInput && classes.input, className)}
      />
    </LabeledItem>
  );
};

FormInput.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  className: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  classes: PropTypes.object,
  center: PropTypes.bool,
  onClick: PropTypes.func,
};

export default injectSheet(styles)(FormInput);
