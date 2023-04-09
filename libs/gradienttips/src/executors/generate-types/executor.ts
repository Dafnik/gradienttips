import {GenerateTypesExecutorSchema} from './schema';
import {readFileSync, writeFileSync} from 'fs';
import {gradientType} from '../../lib/gradient';

export default async function runExecutor(
  options: GenerateTypesExecutorSchema
) {
  console.log('Executor ran for GenerateIdEnum', options);

  const jsonGradients = readFileSync(
    'libs/gradienttips/src/assets/gradients.json',
    'utf-8'
  );
  const gradients = JSON.parse(jsonGradients) as gradientType[];

  let gradientIdOutputString = `export type gradientIds = '${
    gradients.shift()!.id
  }'`;
  for (const gradient of gradients) {
    gradientIdOutputString += ` | '${gradient.id}'`;
  }
  gradientIdOutputString += ';';

  const gradientsOutputString = `export const gradients = ${jsonGradients}`;

  writeFileSync(
    'libs/gradienttips/src/lib/gradientIds.ts',
    gradientIdOutputString
  );
  writeFileSync(
    'libs/gradienttips/src/lib/gradients.ts',
    gradientsOutputString
  );

  return {
    success: true,
  };
}
