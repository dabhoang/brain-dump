const fs = require('fs');
const validateEmail = require('./email');

test('banana@ucsc.edu', () => {
  expect(validateEmail('banana@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('@qqq.g', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeFalsy();
});

test('@.@.@.', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeFalsy();
});

test('th.s.smyem@il', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeFalsy();
});
