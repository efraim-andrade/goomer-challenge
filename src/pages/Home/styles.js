import styled from 'styled-components';
import media from 'styled-media-query';
import { Eclipse } from 'react-loading-io';

import { fonts, metrics, colors } from '~/theme';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;

  ${media.lessThan('large')`
    padding: 0 20px;
  `}

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
  margin: 0 ${metrics.baseSpacing(0.5)};

  display: grid;
  justify-items: center;
  row-gap: ${metrics.baseSpacing(4)};
  column-gap: ${metrics.baseSpacing(6)};
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingIcon = styled(Eclipse).attrs({
  color: colors.primary,
  size: 120,
})`
  margin: 0 auto;

  display: block;
`;

export const Message = styled.span`
  width: 100%;
  margin: 0 auto;

  display: block;

  text-align: center;
  color: ${({ type }) => (type === 'error' ? colors.danger : colors.black)};
`;
