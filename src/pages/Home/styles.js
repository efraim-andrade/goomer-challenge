import styled from 'styled-components';

import { fonts, metrics } from '~/theme';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;

  header {
    margin-bottom: ${metrics.baseSpacing(5)};

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

export const Content = styled.div`
  margin: 0 ${metrics.baseSpacing(4)};

  display: grid;
  row-gap: ${metrics.baseSpacing(4)};
  column-gap: ${metrics.baseSpacing(6)};
  grid-template-columns: repeat(3, 1fr);
`;
