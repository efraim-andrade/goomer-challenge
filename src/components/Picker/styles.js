import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from 'src/functions';
import { colors, metrics } from 'src/theme';

export const Container = styled.div`
  height: ${pxToRem(50)};
  width: ${pxToRem(125)};
  padding: 0 ${pxToRem(20)};
  border-radius: ${metrics.borderRadius};
  border: 1px solid ${colors.greyDark};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('small')`
    height: ${pxToRem(40)};
  `}

  > button,
  > span {
    font-weight: 500;
    color: ${colors.primary};
  }

  > button {
    border: transparent;

    font-size: ${pxToRem(26)};
    background: transparent;
  }

  > span {
    font-size: ${pxToRem(20)};
  }
`;
