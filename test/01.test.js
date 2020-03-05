const panjang = require('../src/01');

test('adds "fine ok" to equal 6', () => {
  expect(panjang('fine ok')).toBe(6);
});