import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Form = ({ children, onSubmit, disabled, className }) => (
  <form onSubmit={onSubmit} className={classnames(className)}>
    <fieldset disabled={disabled && 'disabled'}>
      {children}
    </fieldset>
  </form>
);

Form.propTypes = {

};

export default Form;
