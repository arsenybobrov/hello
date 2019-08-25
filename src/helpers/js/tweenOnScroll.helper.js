import ScrollMagic from 'scrollmagic';
import getChildElm from './partials/getChildElm.partial';
import getPhantomId from './partials/getPhantomId.partial';

const tweenOnScrollHelper = (duration, trigger, id, styles, offset, debug) => {
  const tween = TweenMax.fromTo(`#${id}`, 1, styles.from, styles.to); // eslint-disable-line no-undef

  const controller = new ScrollMagic.Controller({
    globalSceneOptions: { duration, offset },
  });

  const scene = new ScrollMagic.Scene({ triggerElement: `#${trigger}` })
    .setTween(tween)
    .addTo(controller);

  if (debug) {
    scene.addIndicators();
  }
};

const tweenOnScroll = (
  parentClassName,
  childrenStyles,
  duration,
  offset,
  debug
) => {
  const elm = document.getElementsByClassName(parentClassName);

  if (elm.length) {
    document.querySelectorAll(`.${parentClassName}`).forEach((parent) => {
      childrenStyles.forEach((child) => {
        const childElm = getChildElm(parent, child.name);

        if (childElm) {
          const id = getPhantomId(childElm, 'tweenElm_');

          tweenOnScrollHelper(duration, id, id, child.stylings, offset, debug);
        }
      });
    });
  } else {
    console.warn('tweenOnScroll() --> no such className: "', elm, '"');
  }
};

export default tweenOnScroll;
