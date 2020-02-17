import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { getDayOfTheWeek } from 'src/functions';

import { Container } from './styles';

export default function RestaurantInfo({ name, image, address, hours }) {
  const haveHours = useMemo(() => {
    return hours.length > 0;
  }, [hours]);

  return (
    <Container>
      <img src={image} alt="Logo do Restaurante" className="logo" />

      <div className="info">
        <h2>{name}</h2>

        <p className="description">{address}</p>

        {haveHours && (
          <ul>
            {hours.map((hour, index) => (
              <li key={index}>
                {haveHours &&
                  getDayOfTheWeek({ days: hour.days, isLong: true })}
                {` `}
                <b>{hour.from}</b> - <b>{hour.to}</b>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}

RestaurantInfo.defaultProps = {
  name: '',
  image: '',
  address: '',
  hours: [],
};

RestaurantInfo.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.string,
  hours: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      days: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
