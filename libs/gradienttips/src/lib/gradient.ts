import * as jsonGradients from '../assets/gradients.json';
import { gradientIds } from './gradientIds';

export type gradientType = { id: string; name: string; colors: string[] };

type transformerOptions = 'ALL' | 'FIRST_LAST' | 'START_END';

export function getGradients(): gradientType[] {
  return jsonGradients;
}

export function getGradient(id?: gradientIds) {
  let gradient: gradientType;
  if (!id) {
    gradient =
      getGradients()[Math.floor(Math.random() * getGradients().length - 1) + 1];
  } else {
    const localGradient = getGradients().find(
      (arrayGradient) => arrayGradient.id === id
    );
    if (!localGradient) {
      // This shouldn't be possible
      throw Error('Gradient not found');
    }
    gradient = localGradient;
  }

  return gradient;
}

export function transformGradientColors(
  gradient: {
    colors: string[];
  },
  colorTransformer?: transformerOptions
): string[];
export function transformGradientColors(
  gradient: { colors: string[] },
  colorTransformer: 'START_END'
): {
  start: string;
  end: string;
};
export function transformGradientColors(
  gradient: { colors: string[] },
  colorTransformer?: transformerOptions
) {
  switch (colorTransformer) {
    case 'FIRST_LAST':
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return [gradient.colors.shift()!, gradient.colors.pop()!];
    case 'START_END':
      return {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        start: gradient.colors.shift()!,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        end: gradient.colors.pop()!,
      };
    default:
      return gradient.colors;
  }
}
