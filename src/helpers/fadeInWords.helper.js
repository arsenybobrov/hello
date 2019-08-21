import uniqueId from 'lodash/uniqueId';
import TweenMax from 'gsap/TweenMax';

const createCallback = (index, words, callback) => {
  if (callback) {
    if (index + 1 === words.length) {
      return callback;
    }
  }

  return false;
};

const fadeInWords = (id, startAt, delay, callback) => {
  const elm = document.getElementById(id);

  if (elm) {
    const sentence = elm.innerHTML;
    const words = sentence.split(' ');
    let counter = startAt;

    elm.innerHTML = '';

    words.forEach((word, index) => {
      const span = document.createElement('span');
      const createdId = uniqueId('aniWord_');

      span.setAttribute('id', createdId);
      span.textContent = `${word} `;
      span.style.opacity = '0';
      elm.appendChild(span);

      counter += delay;

      TweenMax.to(`#${createdId}`, 1, {
        opacity: 1,
        delay: counter,
        onComplete: createCallback(index, words, callback),
      });
    });
  } else {
    console.warn('animateWords() --> no such id:', id);
  }
};

export default fadeInWords;
