import {
  isAfter,
  isBefore,
  addDays,
  addHours,
  addMinutes,
  subDays,
} from 'date-fns';
import { parseFromTimeZone } from 'date-fns-timezone';

function getStringHours(hourAndMinutes) {
  return Number(hourAndMinutes.split(':')[0]);
}

function getStringMinutes(hourAndMinutes) {
  return Number(hourAndMinutes.split(':')[1]);
}

function timezoneToBrazil(date) {
  return parseFromTimeZone(date, { timeZone: 'America/Bahia' });
}

function handleNewDate({ hours, minutes }) {
  const theDate = new Date();
  const hoursTimestamp = theDate.setHours(0);
  const rightHoursDate = new Date(hoursTimestamp);
  const minutesTimestamp = rightHoursDate.setMinutes(0);
  const rightMinutesAndHours = timezoneToBrazil(new Date(minutesTimestamp));

  return addMinutes(addHours(rightMinutesAndHours, hours), minutes);
}

export default function isRestaurantOpen(openHours) {
  return (
    openHours.filter(hour => {
      const nowDay = timezoneToBrazil(new Date()).getDay() + 1;

      const isTodayHour = hour.days.filter(day => day === nowDay);

      if (isTodayHour.length === 0) {
        return false;
      }

      const now = new Date();

      let from = handleNewDate({
        hours: getStringHours(hour.from),
        minutes: getStringMinutes(hour.from),
      });

      let to;
      if (
        getStringHours(hour.to) < getStringHours(hour.from) &&
        getStringHours(hour.to) < now.getHours()
      ) {
        to = addDays(
          handleNewDate({
            hours: getStringHours(hour.to),
            minutes: getStringMinutes(hour.to),
          }),
          1
        );
      } else {
        to = handleNewDate({
          hours: getStringHours(hour.to),
          minutes: getStringMinutes(hour.to),
        });

        const nightShift = 18;
        if (
          getStringHours(hour.to) >= now.getHours() &&
          getStringHours(hour.from) >= nightShift
        ) {
          from = subDays(from, 1);
        }
      }

      // console.log(`now`, now);
      // console.log(`from`, from);
      // console.log(`to`, to);
      // console.log(
      //   `isAfter(now, from) && isBefore(now, to)`,
      //   isAfter(now, from) && isBefore(now, to)
      // );

      return isAfter(now, from) && isBefore(now, to);
    }).length > 0
  );
}
