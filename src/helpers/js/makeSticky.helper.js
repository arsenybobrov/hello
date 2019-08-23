import ScrollMagic from 'scrollmagic';
import 'animation.gsap'; // eslint-disable-line import/no-unresolved
import 'debug.addIndicators'; // eslint-disable-line import/no-unresolved

const makeSticky = (id, trigger, duration, offset, debug, callback) => {
  if (id && trigger) {
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({ triggerElement: trigger, duration, offset })
      .setPin(id, { pushFollowers: false })
      .addTo(controller);

    if (debug) {
      scene.addIndicators();
    }

    if (callback) {
      scene.on('end', () => {
        callback();
      });
    }
  } else {
    console.warn('makeSticky() --> no such id: ', id, 'or: ', trigger);
  }
};

export default makeSticky;
