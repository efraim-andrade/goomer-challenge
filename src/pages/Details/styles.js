import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';

import { metrics, colors } from 'src/theme';
import { pxToRem } from 'src/functions';
import { Search as SearchC } from 'src/components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  margin: 0 auto;
  max-width: ${pxToRem(1320)};

  ${media.lessThan('large')`
    padding: 0 ${pxToRem(20)};
  `}

  > .content {
    display: flex;
    justify-content: space-between;

    ${media.lessThan('small')`
      flex-direction: column;
    `}

    > .left {
      width: 100%;
      max-width: ${pxToRem(800)};
      margin-right: ${metrics.baseSpacing(16)};

      ${media.lessThan('medium')`
        margin-right: ${metrics.baseSpacing(8)};
      `}
    }

    > .right {
      height: ${pxToRem(600)};
      width: ${pxToRem(282)};
      border-radius: ${metrics.borderRadius()};

      background: ${colors.greyDark};

      ${media.lessThan('small')`
        display: none;
      `}
    }
  }
`;

export const GoBack = styled(Link)`
  position: absolute;
  left: -100px;
  top: 0;

  border-radius: 50%;
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  box-shadow: 0px 4px 8px #00000029;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.white};

  ${media.lessThan('large')`
    top: ${pxToRem(-20)};
    left: ${pxToRem(10)};
  `}

  ${media.lessThan('small')`
    left: ${pxToRem(10)}
  `}
`;

export const Search = styled(SearchC)`
  width: 100%;
  margin-bottom: ${metrics.baseSpacing(4)};
`;
