import ScrollMagic from 'scrollmagic';
import uniqueId from 'lodash/uniqueId';

const toggleClassOnScrollHelper = (duration, trigger, id, className, offset, debug) => {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: { duration },
  });

  const scene = new ScrollMagic.Scene({ triggerElement: `#${trigger}`, offset })
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
        const createdItemId = uniqueId('classTgl_');
        let childElm = null;

        for (let i = 0; i < parent.childNodes.length; i += 1) {
          if (parent.childNodes[i].className === child) {
            childElm = parent.childNodes[i];
            break;
          }
        }

        if (childElm) {
          childElm.setAttribute('id', createdItemId);

          const id = childElm.getAttribute('id');
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
