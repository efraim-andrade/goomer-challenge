import styled from 'styled-components';

import { pxToRem } from 'src/functions';
import { colors, fonts, metrics } from 'src/theme';

import Card from '../Card';

export const Container = styled(Card)`
  width: 100%;
  max-width: unset;
  min-height: ${pxToRem(115)};

  > .info {
    > .price {
      display: flex;
      align-items: center;

      > .current {
        margin-right: ${metrics.baseSpacing(0.5)};

        ${fonts.size2};
        color: ${colors.primary};
      }

      > .promo {
        ${fonts.size1};
        color: ${colors.greyDarker};
        text-decoration: line-through;
      }
    }
  }
`;

export const Flag = styled.div`
  position: absolute;
  right: ${pxToRem(1)};
  top: ${pxToRem(4)};

  border-radius: ${pxToRem(12)};
  padding: ${pxToRem(12)};
  height: ${pxToRem(22)};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;
  background: ${colors.secondary};

  > span {
    margin-left: ${metrics.baseSpacing(0.5)};

    ${fonts.size0};
    font-weight: 700;
    text-align: center;
    color: ${colors.white};
  }
`;
