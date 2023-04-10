import type { APIRoute } from 'astro';
import { getGradient, getGradients } from '@gradienttips/data';

export const get: APIRoute = ({ params, request }) => {
  return { body: JSON.stringify(getGradient(params.gradientId)) };
};

export function getStaticPaths() {
  return [
    { params: { id: '0' } },
    getGradients().map((gradient) => ({ params: { gradientId: gradient.id } })),
  ];
}
