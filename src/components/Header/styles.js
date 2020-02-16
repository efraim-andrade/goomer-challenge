import styled from 'styled-components';

import { pxToRem } from 'src/functions';
import { colors, metrics } from 'src/theme';

export const Container = styled.div`
  width: 100vw;
  height: ${pxToRem(62)};
  box-shadow: 0px 4px 8px #00000029;
  margin-bottom: ${metrics.baseSpacing(4)};

  background-color: ${colors.primary};
`;
