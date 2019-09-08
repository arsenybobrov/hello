import ScrollMagic from 'scrollmagic';
import 'animation.gsap'; // eslint-disable-line import/no-unresolved
import 'debug.addIndicators'; // eslint-disable-line import/no-unresolved

const makeStickyOnScroll = (id, trigger, duration, offset, debug, callback) => {
  const checkId = document.getElementById(id);
  const checkTrigger = document.getElementById(trigger);

  if (checkId && checkTrigger) {
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({ triggerElement: `#${trigger}`, duration, offset })
      .setPin(`#${id}`, { pushFollowers: false })
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
    console.warn('makeStickyOnScrollOnScroll() --> no such id: "', id, '" or: "', trigger, '"');
  }
};

export default makeStickyOnScroll;
