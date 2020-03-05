const censor = require('../src/10');

test('No. 10', () => {
  expect(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*')).toBe('Pada hari ****** saya ***** siang.');
});