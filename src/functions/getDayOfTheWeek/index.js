export default function getDayOfTheWeek({ days, isLong = false }) {
  const firstDay = days[0];
  const lastDay = days[days.length - 1];

  const daysOfTheWeekShort = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const daysOfTheWeekLong = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quita',
    'sexta',
    'sabado',
  ];

  if (isLong) {
    return `${daysOfTheWeekLong[firstDay - 1]} à ${
      daysOfTheWeekLong[lastDay - 1]
    }`;
  }

  return `${daysOfTheWeekShort[firstDay - 1]} - ${
    daysOfTheWeekShort[lastDay - 1]
  }`;
}
