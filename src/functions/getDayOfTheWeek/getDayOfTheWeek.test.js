import getDayOfTheWeek from '.';

describe('Functions - getDayOfTheWeek', () => {
  it('should be able to get the day of the week', () => {
    const dayOfTheWeek = getDayOfTheWeek({ days: [1, 2, 4] });

    expect(dayOfTheWeek).toBe('dom - qua');
  });

  it('should be able to get the day of the week with long description', () => {
    const dayOfTheWeek = getDayOfTheWeek({ days: [1, 2, 4], isLong: true });

    expect(dayOfTheWeek).toBe('domingo à quarta');
  });
});
