import React, { useState } from 'react';

import { Container } from './styles';

export default function Picker() {
  const [value, setValue] = useState(1);

  return (
    <Container>
      <button type="button" className="sub" onClick={() => setValue(value - 1)}>
        -
      </button>

      <span className="value">{value}</span>

      <button
        type="button"
        className="plus"
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
    </Container>
  );
}
