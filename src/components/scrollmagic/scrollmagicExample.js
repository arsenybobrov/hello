import createImageSequence from '../../helpers/js/createImageSequence.helper';
import makeSticky from '../../helpers/js/makeSticky.helper';

const changeBgColor = () => {
  const elm = document.getElementById('s100');
  elm.classList.toggle('s100--dark');
};

const scrollmagicExample = () => {
  const elm = document.getElementById('imagesequence');

  if (elm) {
    makeSticky('#myimg', '#imagesequence', 650, 200, false, null);
    createImageSequence('myimg', '#imagesequence', 1200, 15, false, changeBgColor);
  }
};

export default scrollmagicExample;
