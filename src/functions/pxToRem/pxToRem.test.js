import pxToRem from '.';

describe('Functions - pxToRem', () => {
  it('should be able to transform px to rem base 16', () => {
    const valueInPx = 24;
    const valueInRem = pxToRem(valueInPx);

    expect(valueInRem).toBe(`${valueInPx / 16}rem`);
  });
});
