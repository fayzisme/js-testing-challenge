const mebiToKibi = require('../src/03');

test('adds 2 to equal 2048', () => {
  expect(mebiToKibi(2)).toBe(2048);
});