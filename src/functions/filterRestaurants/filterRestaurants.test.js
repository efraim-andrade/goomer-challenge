import filterRestaurants from '.';
import allRestaurants from './mock';

describe('Functions - filterRestaurants', () => {
  it('should be able to filter restaurants', () => {
    const restaurantName = 'Cupcake para todos';
    const filteredRestaurants = filterRestaurants({
      allRestaurants,
      restaurantName,
    });

    expect(filteredRestaurants.length).toBe(1);
  });

  it('should be able to filter restaurants with no sensitive case', () => {
    const restaurantName = 'cupcake para todos';
    const filteredRestaurants = filterRestaurants({
      allRestaurants,
      restaurantName,
    });

    expect(filteredRestaurants.length).toBe(1);
  });
});
