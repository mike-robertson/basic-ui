# Basic UI Components

Currently in development. Styles may change for some of the more poorly designed components. Docs are a work in progress.

## Components
https://basic-ui.github.io/

## Themes

Components rely on a theme being passed to them in the context. There are several ways to do this:

1. Use the `ThemeProvider` component and pass a theme in

```js
import ThemeProvider from 'basic-ui/lib/ThemeProvider';
import * as theme from 'basic-ui/lib/themes/palette';

const App = () => (
  <ThemeProvider theme={theme}>
    <YourApp />
  </ThemeProvider>
);
```

You can make your own theme, but you will need to follow the same api as the `src/themes/palette.js` file.

2. Use the `DefaultTheme` component

```js
import DefaultTheme from 'basic-ui/lib/ThemeProvider/DefaultTheme';

const App = () => (
  <DefaultTheme>
    <YourApp />
  </DefaultTheme>
);
```
