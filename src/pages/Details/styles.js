import styled from 'styled-components';
import media from 'styled-media-query';

import { metrics, fonts, colors } from 'src/theme';
import { pxToRem } from 'src/functions';
import { Search as SearchC } from 'src/components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${pxToRem(1320)};

  ${media.lessThan('large')`
    padding: 0 ${pxToRem(20)};
  `}

  > .content {
    display: flex;
    justify-content: space-between;

    > .left {
      width: 100%;
      max-width: ${pxToRem(800)};
      margin-right: ${metrics.baseSpacing(16)};
    }

    > .right {
      height: ${pxToRem(600)};
      width: ${pxToRem(282)};
      border-radius: ${metrics.borderRadius()};

      background: ${colors.greyDark};
    }
  }
`;

export const Search = styled(SearchC)`
  width: 100%;
  margin-bottom: ${metrics.baseSpacing(4)};
`;
