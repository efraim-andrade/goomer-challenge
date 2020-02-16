import isRestaurantOpen from '.';
import { normalShift, nightShift } from './mock';

describe('Functions - isRestaurantOpen', () => {
  // const mockedDate = new Date(2020, 1, 15, 20, 20, 0, 0);
  // global.Date = jest.fn(() => mockedDate);
  // global.Date.setHours = hours => mockedDate.setHours(hours);

  it('should be able to filter if is a open day in the restaurant', () => {
    const result = isRestaurantOpen(normalShift);

    expect(result).toBeTruthy();
  });

  it('should be able to filter if is a open night in the restaurant even if turn the dawn ', () => {
    const result = isRestaurantOpen(nightShift);

    expect(result).toBeFalsy();
  });
});
