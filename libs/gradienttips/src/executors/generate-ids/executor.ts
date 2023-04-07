import { GenerateIdsExecutorSchema } from './schema';
import { readFileSync, writeFileSync } from 'fs';

export default async function runExecutor(options: GenerateIdsExecutorSchema) {
  console.log('Executor ran for GenerateIdEnum', options);

  const gradients = JSON.parse(
    readFileSync('libs/gradienttips/src/assets/gradients.json', 'utf-8')
  ) as {
    id: string;
  }[];

  let outputString = `export type gradientIds = '${gradients.shift()!.id}'`;
  for (const gradient of gradients) {
    outputString += ` | '${gradient.id}'`;
  }
  outputString += ';';

  writeFileSync('libs/gradienttips/src/lib/gradientIds.ts', outputString);

  return {
    success: true,
  };
}
