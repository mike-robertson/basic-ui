import * as palette from './palette';

const themeStore = {
  init(palette) {
    this.palette = palette;
  },
};

const theme = Object.create(themeStore);
theme.init(palette);

export { theme };
export default theme.palette;
