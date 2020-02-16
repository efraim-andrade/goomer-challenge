import styled from 'styled-components';

import { pxToRem } from 'src/functions';
import { metrics, fonts, colors } from 'src/theme';

export const Container = styled.div`
  margin-bottom: ${metrics.baseSpacing(2)};

  display: flex;

  > img {
    width: ${pxToRem(145)};
    height: ${pxToRem(145)};
    margin-right: ${metrics.baseSpacing(2)};
    border-radius: ${metrics.borderRadius()};

    object-fit: cover;
  }

  > .info {
    > h2,
    > p,
    > li {
      color: ${colors.black};
    }

    > h2 {
      margin-bottom: ${metrics.baseSpacing(0.5)};

      ${fonts.size3};
      font-weight: 500;
    }

    > .description {
      max-width: ${pxToRem(540)};
      margin-bottom: ${metrics.baseSpacing(0.5)};

      ${fonts.size2};
      font-weight: 400;
    }

    > ul {
      li {
        margin-bottom: ${metrics.baseSpacing(0.25)};

        ${fonts.size1};
        font-weight: 500;
      }
    }
  }
`;
