import React, { PropTypes } from 'react';


import { injectSheet } from '../themes';

const Loading = ({ className, ...rest }) => (
  <svg
    className={className}
    version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="24px" height="30px" viewBox="0 0 24 30" style={{ enableBackground: 'new 0 0 50 50' }}
    {...rest}
  >
    <rect x="0" y="0" width="4" height="10">
      <animateTransform
        attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0" dur="0.6s" repeatCount="indefinite"
      />
    </rect>
    <rect x="10" y="0" width="4" height="10">
      <animateTransform
        attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s" dur="0.6s" repeatCount="indefinite"
      />
    </rect>
    <rect x="20" y="0" width="4" height="10">
      <animateTransform
        attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s" dur="0.6s" repeatCount="indefinite"
      />
    </rect>
  </svg>
);

Loading.propTypes = {
  className: PropTypes.string,
};

const styles = {
  container: {
    '& rect': {
      fill: palette => palette.textColorPrimary,
    },
  },
};

export default injectSheet(styles)(Loading);
