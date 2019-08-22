import ScrollMagic from 'scrollmagic';
import createImageSequence from '../../helpers/js/createImageSequence.helper';


const scrollmagicExample = () => {
  const elm = document.getElementById('imagesequence');

  if (elm) {
    createImageSequence('myimg', '#imagesequence', 300, 3, true);
  }
};

export default scrollmagicExample;
