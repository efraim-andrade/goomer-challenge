import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ children, ...rest }) {
  return (
    <Container data-testid="restaurant" {...rest}>
      {children}
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
