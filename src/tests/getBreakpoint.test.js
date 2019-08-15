import getBreakpoint from '../helpers/js/getBreakpoint.helper';

test('xs', () => {
  expect(getBreakpoint(400)).toBe('xs');
});

test('sm', () => {
  expect(getBreakpoint(576)).toBe('sm');
});

test('md', () => {
  expect(getBreakpoint(800)).toBe('md');
});

test('lg', () => {
  expect(getBreakpoint(993)).toBe('lg');
});

test('xl', () => {
  expect(getBreakpoint(1400)).toBe('xl');
});
