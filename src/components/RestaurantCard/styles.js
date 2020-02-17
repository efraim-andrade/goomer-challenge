import styled from 'styled-components';

import { pxToRem } from 'src/functions';
import { metrics, colors, fonts } from 'src/theme';

import Card from '../Card';

export const Container = styled(Card)`
  &:hover {
    > .flag {
      transform: scale(1.3);
    }
  }

  .info {
    > .hours {
      margin-top: ${metrics.baseSpacing(1)};

      display: flex;
      align-items: center;

      > p {
        margin-right: ${metrics.baseSpacing(2)};

        font-weight: 700;
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
