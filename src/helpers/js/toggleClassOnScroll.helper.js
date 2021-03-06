import ScrollMagic from 'scrollmagic';
import getChildElm from './partials/getChildElm.partial';
import getPhantomId from './partials/getPhantomId.partial';

const toggleClassOnScrollHelper = (duration, trigger, id, className, offset, debug) => {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: { duration, offset },
  });

  const scene = new ScrollMagic.Scene({ triggerElement: `#${trigger}` })
    .setClassToggle(`#${id}`, className)
    .addTo(controller);

  if (debug) {
    scene.addIndicators();
  }
};

const toggleClassOnScroll = (
  parentClassName,
  childrenClassNames,
  duration,
  offset,
  toggleClassIdentifier,
  debug
) => {
  const elm = document.getElementsByClassName(parentClassName);

  if (elm.length) {
    document.querySelectorAll(`.${parentClassName}`).forEach((parent) => {
      childrenClassNames.forEach((child) => {
        const childElm = getChildElm(parent, child);

        if (childElm) {
          const id = getPhantomId(childElm, 'clsTgl_');
          const className = `${child}${toggleClassIdentifier}`;

          toggleClassOnScrollHelper(duration, id, id, className, offset, debug);
        }
      });
    });
  } else {
    console.warn('toggleClassOnScroll() --> no such className: "', elm, '"');
  }
};

export default toggleClassOnScroll;
