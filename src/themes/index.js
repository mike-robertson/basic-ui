import * as palette from './palette';

const themeStore = {
  init(palette) {
    this.palette = palette;
  },
  setPalette(newTheme) {
    this.palette = {
      ...this.palette,
      ...newTheme,
    };
  },
};

const theme = Object.create(themeStore);
theme.init(palette);

export { theme };
export default theme.palette;
