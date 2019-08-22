import TweenMax, { Elastic, SteppedEase } from 'gsap/TweenMax';
import fadeInElms from '../../helpers/js/fadeInElms.helper';

const textFadeIn = () => {
  TweenMax.to('.description', 1, {
    opacity: 1,
  });
};

const handleSlogan = () => {
  TweenMax.to('#slogan', 1, {
    y: 0,
    ease: Elastic.easeOut,
    delay: 0.5,
    onComplete: textFadeIn,
  });
};

const gsapExample = () => {
  const sloganId = document.getElementById('slogan');

  if (sloganId) {
    fadeInElms('slogan', ' ', 1, 0.5, 1, handleSlogan);
  }
};

export default gsapExample;
