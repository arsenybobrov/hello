import getBreakpoint from '../../../helpers/js/getBreakpoint.helper';

const dummy = (prop) => {
  console.log(prop);
  console.log('breakpoint is: ', getBreakpoint(window.innerWidth));
};

export default dummy;
