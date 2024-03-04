import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://wzh666-ux.github.io',
	base: '/front-end-docs',
	integrations: [mdx(), sitemap()],
});
