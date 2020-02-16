import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { pxToRem } from 'src/functions';
import { metrics, colors, fonts } from 'src/theme';

export const Container = styled(Link)`
  position: relative;

  width: 100%;
  max-width: ${pxToRem(367)};
  box-shadow: 0px 2px 4px #00000029;
  border-radius: ${metrics.borderRadius()};

  display: flex;
  align-items: center;

  cursor: pointer;

  > img {
    width: ${pxToRem(100)};
    height: ${pxToRem(110)};
    border-top-left-radius: ${metrics.borderRadius()};
    border-bottom-left-radius: ${metrics.borderRadius()};

    object-fit: cover;
  }

  .info {
    margin-left: ${metrics.baseSpacing(2)};

    > h1 {
      margin-bottom: ${pxToRem(6)};

      ${fonts.size2};
      font-weight: 500;
      color: ${colors.black};
    }

    p {
      & + p {
        margin-top: ${pxToRem(2)};
      }

      ${fonts.size1};
      font-weight: 400;
      color: ${colors.black};
    }
  }
`;
