export function openModal(data) {
  return {
    type: '@modal/OPEN',
    payload: data,
  };
}
