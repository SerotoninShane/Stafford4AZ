import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stafford4az.com',
  integrations: [
    // Leave the form confirmation page out of the sitemap; it isn't something to rank.
    sitemap({ filter: (page) => !page.includes('/thank-you') }),
  ],
  prefetch: true, // enable automatic prefetching for <a href=""> links
});
