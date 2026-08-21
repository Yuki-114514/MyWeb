// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/*
 * ⚠️ 部署前改这一行 ⚠️
 * 站点的真实域名，全站只在这里写一次。
 * canonical / og:url / sitemap.xml / rss.xml 都从它推导，
 * src/data/site.ts 通过 import.meta.env.SITE 读到同一个值。
 * GitHub Pages 用户名站点写 "https://<用户名>.github.io"，
 * 项目站点还要额外设置下面的 base。
 */
const SITE_URL = 'https://yuki-2fo.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    // 代码块跟随深/浅色主题：Shiki 输出 CSS 变量，由 prose.css 里的
    // [data-theme] 规则决定用哪一套（原先写死 github-dark，且被内联 style 覆盖）
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      defaultColor: false,
    },
  },
});
