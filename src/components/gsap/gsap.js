import TweenMax, { Elastic } from 'gsap/TweenMax';
import fadeInWords from '../../helpers/fadeInWords.helper';

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
  fadeInWords('slogan', 1, 0.5, handleSlogan);
};

export default gsapExample;
