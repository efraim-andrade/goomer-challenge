import styled from 'styled-components';

import { fonts, metrics } from '~/theme';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;

  header {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      margin-bottom: ${metrics.baseSpacing(4)};

      ${fonts.size3};
      text-align: center;
    }
  }
`;
