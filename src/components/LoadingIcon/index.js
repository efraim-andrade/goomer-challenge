import styled from 'styled-components';
import { Eclipse } from 'react-loading-io';

import { colors } from 'src/theme';

export default styled(Eclipse).attrs({
  color: colors.primary,
  size: 120,
})`
  margin: 0 auto;

  display: block;
`;
