import styled from 'styled-components';

import { pxToRem } from 'src/functions';
import { metrics, colors } from 'src/theme';

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
`;
