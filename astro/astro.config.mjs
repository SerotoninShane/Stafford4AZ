import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stafford4az.com',
  integrations: [
    sitemap(),
  ],
  prefetch: true, // enable automatic prefetching for <a href=""> links
});
