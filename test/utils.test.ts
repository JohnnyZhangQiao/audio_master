import pathMethod from '../src/utils/path';

describe('path', () => {
  it('return string', () => {
    expect(pathMethod.relative('from', 'to')).toBe('from/to');
  });
});
