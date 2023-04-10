import { gradientDirection } from '@gradienttips/data';

export function gradientColorsToBackgroundStyleProps(
  gradientColors: string[],
  direction?: gradientDirection
) {
  return `linear-gradient(to ${direction ?? 'right'}, ${gradientColors.join(
    ', '
  )})`;
}
