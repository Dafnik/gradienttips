import { gradientIds, gradientType } from '@gradienttips/types';

export async function getGradient(id: gradientIds): Promise<gradientType> {
  const response = await fetch(`https://gradient.tips/api/g/${id}.json`);
  return await response.json() as gradientType;
}