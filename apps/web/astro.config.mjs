import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: '../../dist/apps/web',
  integrations: [preact({ compat: true }), tailwind()],
  site: 'https://dafnik.github.io'
});
