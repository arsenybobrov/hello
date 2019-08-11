import { breakpoints } from '../../config/publicConfig';

const getBreakpoint = (windowWidth) => {
  if (windowWidth > breakpoints.xs && windowWidth < breakpoints.md) {
    return 'sm';
  }

  if (windowWidth > breakpoints.sm && windowWidth < breakpoints.lg) {
    return 'md';
  }

  if (windowWidth > breakpoints.md && windowWidth < breakpoints.xl) {
    return 'lg';
  }

  if (windowWidth > breakpoints.lg) {
    return 'xl';
  }

  return 'xs';
};

export default getBreakpoint;
