import getBreakpoint from '../../../helpers/js/getBreakpoint';

const dummy = (prop) => {
  console.log(prop);
  console.log('breakpoint is: ', getBreakpoint(window.innerWidth));
};

export default dummy;
