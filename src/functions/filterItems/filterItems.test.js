import filterItems from '.';
import allRestaurants from './mock';

describe('Functions - filterItems', () => {
  it('should be able to filter restaurants', () => {
    const restaurantName = 'Cupcake para todos';
    const filteredRestaurants = filterItems({
      allItems: allRestaurants,
      searchText: restaurantName,
    });

    expect(filteredRestaurants.length).toBe(1);
  });

  it('should be able to filter restaurants with no sensitive case', () => {
    const restaurantName = 'cupcake para todos';
    const filteredRestaurants = filterItems({
      allItems: allRestaurants,
      searchText: restaurantName,
    });

    expect(filteredRestaurants.length).toBe(1);
  });
});
