import uniqueId from 'lodash/uniqueId';
import TweenMax, { SteppedEase } from 'gsap/TweenMax';

const createCallback = (index, elms, callback) => {
  if (callback) {
    if (index + 1 === elms.length) {
      return callback;
    }
  }

  return false;
};

const fadeInElms = (id, separator, startAt, delay, duration, callback) => {
  const elm = document.getElementById(id);

  if (elm) {
    const sentence = elm.innerHTML;
    const elms = sentence.split(separator);
    let counter = startAt;

    elm.innerHTML = '';

    elms.forEach((item, index) => {
      const span = document.createElement('span');
      const createdItemId = uniqueId('aniWord_');

      span.setAttribute('id', createdItemId);
      span.textContent = `${item}${separator}`;
      span.style.opacity = '0';
      elm.appendChild(span);

      counter += delay;

      TweenMax.to(`#${createdItemId}`, duration, {
        opacity: 1,
        delay: counter,
        ease: SteppedEase.config(37),
        onComplete: createCallback(index, elms, callback),
      });
    });
  } else {
    console.warn('animateElms() --> no such id:', id);
  }
};

export default fadeInElms;
