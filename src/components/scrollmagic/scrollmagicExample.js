import ScrollMagic from 'scrollmagic';
import 'animation.gsap'; // eslint-disable-line import/no-unresolved
import 'debug.addIndicators'; // eslint-disable-line import/no-unresolved

import createImageSequence from '../../helpers/js/createImageSequence.helper';
import makeStickyOnScroll from '../../helpers/js/makeStickyOnScroll.helper';
import toggleClassOnScroll from '../../helpers/js/toggleClassOnScroll.helper';
import tweenOnScroll from '../../helpers/js/tweenOnScroll.helper';

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
  const toggler = document.getElementById('classToggleExample');
  const tweener = document.getElementById('tweeningExample');

  // scrollmagic-class-toggle
  if (toggler) {
    toggleClassOnScroll(
      'teaserText',
      [
        'teaserText__headline',
        'teaserText__text',
        'teaserText__cta-list',
      ],
      500,
      -100,
      '--inView',
      false
    );
  }

  // scrollmagic-gsap-tweening
  if (tweener) {
    tweenOnScroll(
      'teaserText',
      [
        {
          name: 'teaserText__headline',
          stylings: {
            from: { opacity: 0, top: '-45px' },
            to: { opacity: 1, top: 0 },
          },
        },
        {
          name: 'teaserText__text',
          stylings: {
            from: { opacity: 0, top: '45px' },
            to: { opacity: 1, top: 0 },
          },
        },
        {
          name: 'teaserText__cta-list',
          stylings: {
            from: { opacity: 0, top: '90px' },
            to: { opacity: 1, top: 0 },
          },
        },
      ],
      300,
      0,
      false
    );
  }

  // scrollmagic-image-sequence
  if (elm) {
    makeStickyOnScroll('myimg', 'imagesequence', 650, 200, false, null);
    createImageSequence('myimg', 'imagesequence', 1200, 15, false, changeBgColor);
  }

  // scrollmagic-svg-drawing
  if (svg) {
    playWithGithubSvg();
  }
};

export default scrollmagicExample;
