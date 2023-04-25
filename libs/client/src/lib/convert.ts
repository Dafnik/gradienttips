import { gradientDirection } from '@gradienttips/types';

export function gradientColorsToBackgroundStyleProps(
  gradientColors: string[],
  direction?: gradientDirection | null
) {
  return `linear-gradient(to ${direction ?? 'right'}, ${gradientColors.join(
    ', '
  )})`;
}
