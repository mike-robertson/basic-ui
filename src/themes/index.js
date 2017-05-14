import { PropTypes } from 'react';
import { compose, getContext } from 'recompose';
import jssInjectSheet from 'react-jss';

export const injectSheet = sheet => compose(
  getContext({ theme: PropTypes.object }),
  jssInjectSheet(sheet)
);
