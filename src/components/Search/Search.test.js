import React from 'react';
import { render } from '@testing-library/react';

import Search from '.';
import dataMock from './dataMock';

describe('Components - Search', () => {
  it('should be able to search restaurants', async () => {
    const { container } = render(<Search />);

    expect(container).toBeDefined();
  });
});
