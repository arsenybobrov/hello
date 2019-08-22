import ScrollMagic from 'scrollmagic';
import 'animation.gsap'; // eslint-disable-line import/no-unresolved
import 'debug.addIndicators'; // eslint-disable-line import/no-unresolved

const createImageSequence = (id, trigger, duration, repeat, debug) => {
  if (id && trigger) {
    const images = JSON.parse(document.getElementById(id).getAttribute('data-images'));
    const obj = { curImg: 0 };

    const tween = TweenMax.to(obj, 0.5, // eslint-disable-line no-undef
      {
        curImg: images.length - 1,
        roundProps: 'curImg',
        repeat,
        immediateRender: true,
        ease: Linear.easeNone, // eslint-disable-line no-undef
        onUpdate() {
          document.getElementById(id).setAttribute('src', images[obj.curImg]);
        },
      });

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({ triggerElement: trigger, duration })
      .setTween(tween)
      .addTo(controller);

    if (debug) {
      scene.addIndicators();
    }
  } else {
    console.warn('createImageSequence() --> no such id: ', id, 'or: ', trigger);
  }
};

export default createImageSequence;
