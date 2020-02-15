import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

describe('Components - Header', () => {
  it('should be able to render properly', () => {
    const { container } = render(<Header />);

    expect(container).toBeDefined();
  });
});
