import { ConvertOldExecutorSchema } from './schema';
import { readFileSync, writeFileSync } from 'fs';

export default async function runExecutor(options: ConvertOldExecutorSchema) {
  console.log('Executor ran for ConvertOld', options);

  const gradients = JSON.parse(
    readFileSync('libs/gradienttips/src/assets/old_gradients.json', 'utf-8')
  ) as {
    name: string;
    colors: string[];
  }[];

  const newGradients = [];

  for (const gradient of gradients) {
    let id = gradient.name.toLowerCase();
    id = id.replace(/\s/g, '-');
    id = id.replace('&', 'and');
    id = id.replace("'", '');
    newGradients.push({
      id: id,
      name: gradient.name,
      colors: gradient.colors,
    });
  }

  writeFileSync(
    'libs/gradienttips/src/assets/gradients.json',
    JSON.stringify(newGradients)
  );

  return {
    success: true,
  };
}
