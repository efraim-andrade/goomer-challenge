import styled, { css } from 'styled-components';

import { pxToRem } from 'src/functions';
import { metrics, colors, fonts } from 'src/theme';

const isDetailStyles = css`
  padding-left: 0;

  background: ${colors.greyDark};

  > .label {
    height: 100%;
    min-width: ${pxToRem(214)};
    margin-right: ${metrics.baseSpacing()};
    border-radius: ${pxToRem(20)} 0 0 ${pxToRem(20)};

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${colors.white};

    > span {
      ${fonts.size2};
      font-weight: 400;
      color: ${colors.dark};
    }
  }

  > input {
    background: ${colors.greyDark};
  }
`;

export const Container = styled.div`
  height: ${metrics.baseSpacing(5)};
  width: 80%;
  max-width: ${pxToRem(840)};
  box-shadow: 0px 2px 4px #00000029;
  padding: 0 ${metrics.baseSpacing(3)};
  border-radius: ${metrics.borderRadius(10)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${colors.grey};

  > input {
    border: none;
    width: 100%;

    font-weight: 500;
    color: ${colors.black};
    background: ${colors.grey};

    &::placeholder {
      color: ${colors.black};
    }
  }

  > button {
    border: none;

    background: transparent;
  }

  ${({ isDetail }) => isDetail && isDetailStyles};
`;
