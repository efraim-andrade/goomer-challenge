export function addRestaurants(data) {
  return {
    type: '@restaurants/ADD',
    payload: data,
  };
}
