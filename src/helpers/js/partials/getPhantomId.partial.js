import uniqueId from 'lodash/uniqueId';

const getPhantomId = (elm, prefix) => {
  elm.setAttribute('id', uniqueId(prefix));
  return elm.getAttribute('id');
};

export default getPhantomId;
