import TweenMax, { Elastic } from 'gsap/TweenMax';

const textFadeIn = () => {
  TweenMax.to('.description', 1, {
    opacity: 1,
  });
};

const gsapExample = () => {
  TweenMax.to('#slogan', 1, {
    y: 0,
    ease: Elastic.easeOut,
    delay: 2,
    onComplete: textFadeIn,
  });
};

export default gsapExample;
