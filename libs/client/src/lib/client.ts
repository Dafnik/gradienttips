import { gradientIds, gradientType } from '@gradienttips/types';

export async function getGradient(id: gradientIds): Promise<gradientType> {
  const response = await fetch(`https://gradient.tips/api/v1/g/${id}.json`);
  return (await response.json()) as gradientType;
}

export async function getGradients(): Promise<gradientType[]> {
  const response = await fetch(`https://gradient.tips/api/v1/gradients.json`);
  return (await response.json()) as gradientType[];
}
