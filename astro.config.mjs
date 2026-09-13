// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The address search engines should list. Change this to
  // https://www.benedetta-martini.com on the day the domain is switched over —
  // a sitemap naming the wrong address is worse than no sitemap.
  site: 'https://benedetta-martini.bmartini.workers.dev',
  integrations: [sitemap()],
  server: { host: true },
});
