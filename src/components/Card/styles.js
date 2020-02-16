import styled from 'styled-components';

import { metrics, colors, fonts } from '~/theme';
import { pxToRem } from '~/functions';

export const Container = styled.a`
  position: relative;

  width: 100%;
  max-width: ${pxToRem(367)};
  box-shadow: 0px 2px 4px #00000029;
  border-radius: ${metrics.borderRadius()};

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    > .flag {
      transform: scale(1.3);
    }
  }

  > img {
    width: ${pxToRem(100)};
    height: ${pxToRem(110)};
    border-top-left-radius: ${metrics.borderRadius()};
    border-bottom-left-radius: ${metrics.borderRadius()};

    object-fit: cover;
  }

  .info {
    margin-left: ${metrics.baseSpacing(3)};

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
