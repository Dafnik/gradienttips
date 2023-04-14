import type { APIRoute } from 'astro';
import { getGradients } from '@gradienttips/data';

export const get: APIRoute = ({ params, request }) => {
  return { body: JSON.stringify(getGradients()) };
};
