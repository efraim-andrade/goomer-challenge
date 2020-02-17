import styled from 'styled-components';
import Modal from 'react-modal';

import { metrics, colors, fonts } from 'src/theme';
import { pxToRem } from 'src/functions';

export const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${pxToRem(600)};
  padding: 20px 10px;
  border-radius: ${metrics.borderRadius()};
  box-shadow: 0px 4px 8px #00000033;

  display: flex;
  align-items: center;

  background: ${colors.white};

  > button {
    position: absolute;
    right: ${pxToRem(-18)};
    top: ${pxToRem(-18)};

    border-radius: 50%;
    border: transparent;
    width: ${pxToRem(48)};
    height: ${pxToRem(48)};
    box-shadow: 0px 2px 4px #00000029;

    background: ${colors.white};
  }

  > .content {
    width: 100%;

    > img {
      width: 100%;
      height: ${pxToRem(200)};
      padding: ${pxToRem(10)};
      margin-bottom: ${metrics.baseSpacing(5)};
      border-radius: ${metrics.borderRadius()};

      object-fit: cover;
    }

    > h3 {
      margin-bottom: ${metrics.baseSpacing(0.5)};

      ${fonts.size3};
      font-weight: 500;
      color: ${colors.black};
    }

    > .wrap {
      margin-bottom: ${metrics.baseSpacing(3)};

      display: flex;
      align-items: center;
      justify-content: space-between;

      > p {
        width: ${pxToRem(380)};

        font-weight: 500;
        color: ${colors.black};
        ${fonts.size2};
      }

      > span {
        ${fonts.size4};
        font-weight: 500;
        color: ${colors.primary};
      }
    }

    > hr {
      width: calc(100% + 20px);
      margin-left: -10px;
      border: ${pxToRem(1)} solid ${colors.greyDark};
    }

    > footer {
      margin-top: ${metrics.baseSpacing(3)};

      display: flex;
      align-items: center;
      justify-content: space-between;

      > .picker {
      }

      > .buy {
        border: transparent;
        width: ${pxToRem(200)};
        height: ${pxToRem(50)};
        padding: 0 ${pxToRem(12)};
        border-radius: ${metrics.borderRadius()};

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: ${colors.primary};

        > span {
          ${fonts.size2};
          font-weight: 500;
          color: ${colors.white};
        }
      }
    }
  }
`;
