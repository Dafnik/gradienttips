import type { APIRoute } from 'astro';
import { getGradient, getGradients } from '@gradienttips/data';

export const get: APIRoute = ({ params, request }) => {
  return { body: JSON.stringify(getGradient(params.gradientId)) };
};

export function getStaticPaths() {
  return getGradients().map((gradient) => ({
    params: { gradientId: gradient.id },
  }));
}
