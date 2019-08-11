import debounce from 'lodash/debounce';
import './main.scss';
import '../assets/fonts/exo2-regular-webfont.woff';
import '../assets/fonts/exo2-regular-webfont.woff2';

import dummy from '../components/molecules/dummyComponent/dummy';
import anotherDummy from '../components/atoms/anotherDummyComponent/anotherDummy';
import getBreakpoint from '../helpers/js/getBreakpoint';

document.addEventListener('DOMContentLoaded', () => {
  console.log('document is ready!');

  dummy('dummy is rocking');
  anotherDummy();
});

window.addEventListener('resize', debounce(() => {
  console.log('document resized!');
  console.log('breakpoint is: ', getBreakpoint(window.innerWidth));
}, 250));
