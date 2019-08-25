const getChildElm = (parent, child) => {
  let childElm = null;

  for (let i = 0; i < parent.childNodes.length; i += 1) {
    if (parent.childNodes[i].className === child) {
      childElm = parent.childNodes[i];
      break;
    }
  }

  return childElm;
};

export default getChildElm;
