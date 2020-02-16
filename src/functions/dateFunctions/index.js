import { isAfter, isBefore, addDays, addHours } from 'date-fns';

export function getStringHours(hourAndMinutes) {
  return Number(hourAndMinutes.split(':')[0]);
}

export function isRestaurantOpen(openHours) {
  return openHours.filter(hour => {
    const nowDay = new Date().getDay() + 1;

    const isTodayHour = hour.days.filter(day => day === nowDay);

    if (isTodayHour.length === 0) {
      return false;
    }

    const now = new Date();

    const from = addHours(
      new Date(new Date().setHours(0)),
      getStringHours(hour.from)
    );

    let to;
    if (getStringHours(hour.to) < getStringHours(hour.from)) {
      to = addHours(
        addDays(new Date(new Date().setHours(0)), 1),
        getStringHours(hour.to)
      );
    } else {
      to = addHours(new Date(new Date().setHours(0)), getStringHours(hour.to));
    }

    return isAfter(now, from) && isBefore(now, to);
  });
}
