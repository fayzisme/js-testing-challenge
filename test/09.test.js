const symmetrical = require('../src/09');

test('add 1234 to equal false', () => {
  expect(symmetrical(1234)).toBe(false);
});