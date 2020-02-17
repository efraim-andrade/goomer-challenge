function removeDots(money) {
  return money.replace('.', ',');
}

function addSpace(money) {
  return money.replace('$', '$ ');
}

export default function convertMoney(money) {
  const prettyCurrency = money.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return addSpace(removeDots(prettyCurrency));
}
