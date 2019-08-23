import ScrollMagic from 'scrollmagic';
import 'animation.gsap'; // eslint-disable-line import/no-unresolved
import 'debug.addIndicators'; // eslint-disable-line import/no-unresolved

import createImageSequence from '../../helpers/js/createImageSequence.helper';
import makeSticky from '../../helpers/js/makeSticky.helper';

const playWithGithubSvg = () => {
  const pathPrepare = (el) => {
    el.style.fill = 'green'; // eslint-disable-line
  };

  const github = document.getElementById('github');

  pathPrepare(github);

  const controller = new ScrollMagic.Controller();

  const tween = new TimelineMax() // eslint-disable-line
    .add(TweenMax.to(github, 1, { fill: 'red', ease: Linear.easeNone })); // eslint-disable-line

  new ScrollMagic.Scene({ triggerElement: '#svgDrawingArea', duration: 400, tweenChanges: true })
    .setTween(tween)
    .addIndicators()
    .addTo(controller);
};

const changeBgColor = () => {
  const elm = document.getElementById('s100');
  elm.classList.toggle('s100--dark');
};

const scrollmagicExample = () => {
  const elm = document.getElementById('imagesequence');
  const svg = document.getElementById('svgDrawingArea');

  if (elm) {
    makeSticky('#myimg', '#imagesequence', 650, 200, false, null);
    createImageSequence('myimg', '#imagesequence', 1200, 15, false, changeBgColor);
  }

  if (svg) {
    playWithGithubSvg();
  }
};

export default scrollmagicExample;
