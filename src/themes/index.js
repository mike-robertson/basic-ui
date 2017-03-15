import * as palette from './darkPalette';

const themeStore = {
  init(palette) {
    this.palette = palette;
  },
  setPalette(newPalette) {
    this.palette = newPalette;
  }
};

const theme = Object.create(themeStore);
theme.init(palette);

export default theme;
