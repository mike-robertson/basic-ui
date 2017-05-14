import React from 'react';
import * as theme from '../themes/palette';
import ThemeProvider from './';

const DefaultTheme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default DefaultTheme;
