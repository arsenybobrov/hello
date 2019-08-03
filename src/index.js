import './main.scss';
import debounce from 'lodash/debounce';
import dummy from './dummyComponent/dummy';

document.addEventListener('DOMContentLoaded', () => {
  console.log('document is ready!');

  dummy('dummy is rocking');
});

window.addEventListener('resize', debounce(() => {
  console.log('document resized!');
}, 250));
