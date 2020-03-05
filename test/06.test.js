const repeatString = require('../src/06');

test('add "Makan! " to equal "Makan! Makan! Makan!"', () => {
  expect(repeatString('Makan! ',3)).toBe('Makan! Makan! Makan! ');
});