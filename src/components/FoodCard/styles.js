import styled from 'styled-components';

import { pxToRem } from 'src/functions';
import { colors, fonts, metrics } from 'src/theme';

import Card from '../Card';

export const Container = styled(Card)`
  width: 100%;
  max-width: unset;

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
  right: ${pxToRem(-18)};
  top: ${pxToRem(-18)};

  border-radius: 50%;
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;
  background: ${({ isOpen }) =>
    isOpen ? colors.secondary : colors.secondaryLight};

  > span {
    ${fonts.size0};
    font-weight: 700;
    text-align: center;
    color: ${colors.white};
  }
`;
