const arrayMirroring= require('../src/08');

test('add [1,2,3] to equal [1,2,3,3,2,1]', () => {
  expect(arrayMirroring([1,2,3])).toStrictEqual([1,2,3,3,2,1]);
});