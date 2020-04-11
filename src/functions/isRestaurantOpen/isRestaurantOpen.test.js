import MockDate from 'mockdate';

import isRestaurantOpen from '.';
import { normalShift, nightShift } from './mock';

describe('Functions - isRestaurantOpen', () => {
  const mockedDate = new Date(2020, 1, 15, 20, 20, 0, 0);

  MockDate.set(mockedDate);

  it('should be able to filter if is a open day in the restaurant', () => {
    const result = isRestaurantOpen(normalShift);

    expect(result).toBeFalsy();
  });

  it('should be able to filter if is a open night in the restaurant even if turn the dawn ', () => {
    const result = isRestaurantOpen(nightShift);

    expect(result).toBeTruthy();
  });
});
