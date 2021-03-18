import { calculteDimension } from '@utils/number';

describe('calculteDimension()', () => {
  it(`Returns calculated dimensions`, () => {
    const TEST = 100;
    const RESULT = 10;

    expect(calculteDimension(TEST)).toBe(RESULT);
  });
});
