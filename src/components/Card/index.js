import React from 'react';
import PropTypes from 'prop-types';

import { Container, Flag } from './styles';

export default function Card({ name, address, hours, image }) {
  function isClosed() {
    return true;
  }

  return (
    <Container href="#" data-testid="restaurant">
      <img src={image} alt="Logo" />

      <div className="info">
        <h1>{name}</h1>
        <p>{address}</p>

        {hours.length > 0 && (
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

      <Flag className="flag" isClosed={isClosed()}>
        <span>{isClosed() ? 'Fechado' : 'Aberto agora'}</span>
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
