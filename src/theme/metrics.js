import { pxToRem } from '~/functions';

export default {
  maxWidth: pxToRem(1300),
  borderRadius: (multiplier = 1) => pxToRem(4 * multiplier),
  baseSpacing: (multiplier = 1) => pxToRem(8 * multiplier),
};
