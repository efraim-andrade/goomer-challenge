import React, { useMemo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { isRestaurantOpen } from 'src/functions';

import { Container, Flag } from './styles';

export default function Card({ name, address, hours, image }) {
  const [isOpen, setIsOpen] = useState(false);

  const hoursLength = useMemo(() => {
    return hours.length;
  }, [hours]);

  useEffect(() => {
    function handleIsOpen() {
      const SECOND_IN_MILLISECONDS = 1000;

      setInterval(
        () => setIsOpen(hoursLength > 0 ? isRestaurantOpen(hours) : false),
        SECOND_IN_MILLISECONDS * 60
      );
    }

    setIsOpen(hoursLength > 0 ? isRestaurantOpen(hours) : false);
    handleIsOpen();
  }, [hours, hoursLength]);

  const isClosedText = useMemo(() => {
    if (hoursLength > 0) {
      return isOpen ? 'Aberto agora' : 'Fechado';
    }

    return 'Fechado';
  }, [hoursLength, isOpen]);

  const getDayOfTheWeek = useCallback(days => {
    const firstDay = days[0];
    const lastDay = days[days.length - 1];

    const daysOfTheWeek = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    return `${daysOfTheWeek[firstDay - 1]} - ${daysOfTheWeek[lastDay - 1]}`;
  }, []);

  return (
    <Container href="#" data-testid="restaurant">
      <img src={image} alt="Logo" />

      <div className="info">
        <h1>{name}</h1>
        <p>{address}</p>

        {hoursLength > 0 && (
          <div className="hours">
            <p>horários</p>

            <div>
              {hours.map((hour, index) => (
                <p key={index}>
                  <b>{hoursLength > 0 && getDayOfTheWeek(hour.days)}</b>
                  {` `}
                  <span>{hour.from}</span> - <span>{hour.to}</span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <Flag className="flag" isOpen={isOpen}>
        <span>{isClosedText}</span>
      </Flag>
    </Container>
  );
}

Card.defaultProps = {
  hours: [],
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hours: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      days: PropTypes.arrayOf(PropTypes.number),
    })
  ),
};
