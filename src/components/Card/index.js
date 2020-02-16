import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Flag } from './styles';

export default function Card({ name, address, hours, image }) {
  const getHours = useCallback(hourAndMinutes => {
    return Number(hourAndMinutes.split(':')[0]);
  }, []);

  const isClosed = () => true;

  // const isClosed = useCallback(
  //   ({ hourToOpen, hourToClose }) => {
  //     const open = hours && getHours(hourToOpen);
  //     const close = hours && getHours(hourToClose);

  //     const now = new Date().getHours();

  //     return now > open && now < close;
  //   },
  //   [getHours, hours]
  // );

  const hoursLength = useMemo(() => {
    return hours.length;
  }, [hours]);

  const isClosedText = useMemo(() => {
    if (hoursLength > 0) {
      return isClosed() ? 'Fechado' : 'Aberto agora';
    }

    return 'Fechado';
  }, [hoursLength, isClosed]);

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
                  <span>{hour.from}</span> - <span>{hour.to}</span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <Flag className="flag" isClosed={hoursLength && true}>
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
