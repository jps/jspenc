import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';

export default defineConfig({
  outDir: '../../dist/apps/jspenc-web-astro',
  integrations: [react(), sitemap(), tailwind(), turbolinks()],
});
