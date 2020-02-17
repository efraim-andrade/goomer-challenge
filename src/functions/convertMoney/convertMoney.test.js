import convertMoney from '.';

describe('Functions - convertMoney', () => {
  it('should format the money to BRL', () => {
    const formatedMoney = convertMoney(5.2);

    expect(formatedMoney).toBe('R$ 5,20');
  });
});
