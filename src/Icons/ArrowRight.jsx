import React from 'react';

import theme from '../themes';

const ArrowRight = props => (
  <svg fill={theme.palette.textColorPrimary} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
    <path d="M0-.5h24v24H0z" fill="none" />
  </svg>
);

export default ArrowRight;
