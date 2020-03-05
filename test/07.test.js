const repeatLetter = require('../src/07');

test('add "Hello World",2 to equal "HHeelloo WWoorrlldd"', () => {
  expect(repeatLetter("Hello World",2)).toBe("HHeelllloo WWoorrlldd");
});