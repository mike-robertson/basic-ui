import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import injectTheme from '../injectTheme';
import * as darkPalette from './darkPalette';

const themeStore = {
  init(palette = darkPalette) {
    this.palette = palette;
    this.subject = new BehaviorSubject(palette);
  },
  setPalette(newPalette) {
    this.palette = newPalette;
    this.subject.onNext(newPalette);
  },
  subscribe(onNext, err, onCompleted) {
    return this.subject.subscribe(onNext, err, onCompleted);
  },
};

const theme = Object.create(themeStore);
theme.init();

export default theme;
export const injectSheet = injectTheme(theme);
