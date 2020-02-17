import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { isRestaurantOpen, getDayOfTheWeek } from 'src/functions';

import { Container, Flag } from './styles';

export default function RestaurantCard({ id, name, address, hours, image }) {
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

  return (
    <Container to={`detalhes/${id}`} data-testid="restaurant">
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
                  <b>
                    {hoursLength > 0 && getDayOfTheWeek({ days: hour.days })}
                  </b>
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

RestaurantCard.defaultProps = {
  hours: [],
};

RestaurantCard.propTypes = {
  id: PropTypes.number.isRequired,
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
