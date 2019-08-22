import debounce from 'lodash/debounce';
import './main.scss';
import '../assets/fonts/exo2-regular-webfont.woff';
import '../assets/fonts/exo2-regular-webfont.woff2';
import getBreakpoint from '../helpers/js/getBreakpoint.helper';
import gsapExample from '../components/gsap/gsapExample';
import scrollmagicExample from '../components/scrollmagic/scrollmagicExample';

document.addEventListener('DOMContentLoaded', () => {
  console.log('document is ready!');
  gsapExample();
  scrollmagicExample();
});

window.addEventListener('resize', debounce(() => {
  console.log('breakpoint is: ', getBreakpoint(window.innerWidth));
}, 250));
