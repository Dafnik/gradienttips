import { gradients } from './gradients';
import { gradientIds, gradientType } from '@gradienttips/types';

export function getGradients(): gradientType[] {
  return gradients;
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
