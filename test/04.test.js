const isLeapYear = require('../src/04');

test('add 2020 to equal true', () => {
  expect(isLeapYear(2020)).toBe(true);
});