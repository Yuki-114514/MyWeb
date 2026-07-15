// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 换成你自己的域名，会用于生成绝对 URL / sitemap
  site: 'https://example.com',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
