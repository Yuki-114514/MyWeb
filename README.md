# MyWeb

我的个人小站。Astro 静态站，不带前端框架，部署在 Cloudflare Pages。

线上：<https://yuki-2fo.pages.dev>

## 技术栈

- **Astro 7**，纯静态输出；页面上的交互（深浅色切换、音乐播放器、花瓣粒子、Live2D）都是原生小脚本，没有 React/Vue 之类的运行时。
- **TypeScript strict**，路径别名 `@/*` → `src/*`。
- **内容集合**：文章是 `src/content/blog/` 下的 Markdown，frontmatter 有 zod schema 校验。
- **Shiki 代码高亮**，输出 CSS 变量，跟随深浅色主题切换。
- **@astrojs/sitemap** + 手写的 `rss.xml` / `robots.txt`。
- 字体走 `@fontsource` 自托管；图标是内联的 Phosphor duotone path，没有图标库依赖。

## 本地跑起来

需要 Node ≥ 22（见 `.nvmrc`）和 pnpm 11（走 corepack，版本钉在 `package.json` 的 `packageManager`）。

```bash
corepack enable
pnpm install
pnpm dev
```

| 命令 | 作用 |
|---|---|
| `pnpm dev` | 开发服务器，默认 <http://localhost:4321> |
| `pnpm build` | 构建到 `dist/` |
| `pnpm preview` | 本地预览构建产物 |
| `pnpm check` | `astro check`：类型 + 内容 schema 检查 |

## 改内容改哪里

站点内容基本都收在 `src/data/`，改一处就够，不用翻组件。

| 想改什么 | 改哪个文件 |
|---|---|
| 站点域名 | `astro.config.mjs` 顶部的 `SITE_URL`（canonical / og:url / sitemap / rss 都从它推导，全站只写这一次） |
| 名字、头衔、标语、自述、导航、社交链接、技能、时间线 | `src/data/site.ts` |
| 项目列表（首页精选 + `/projects`） | `src/data/projects.ts` |
| 壁纸、头像、立绘、OG 图、一言、花瓣、Live2D 开关 | `src/data/theme.ts` |
| 音乐播放器歌单 | `src/data/music.ts`（音频文件另见 [`public/music/README.md`](public/music/README.md)） |
| 卡片可用的图标 | `src/data/icons.ts` |
| 文章 | `src/content/blog/*.md` |

`site.ts` 里留空的字段，对应的 UI 就不渲染——比如 `twitter` 留空就不出这个图标，`skills` 是空数组就整块不渲染。线上不会出现点了没反应的死链接。

## 写文章

在 `src/content/blog/` 新建 `.md`，文件名就是网址（`hello.md` → `/blog/hello`）。frontmatter 字段见 `src/content.config.ts`：

```yaml
---
title: 标题
description: 一句话摘要，用于列表页和 SEO
pubDate: 2026-08-30
# 以下可选
updatedDate: 2026-08-31
tags: [Astro, 折腾]
icon: flower        # 取值见 src/data/icons.ts
draft: false        # true 则不进列表、RSS 和 sitemap
---
```

标签页和分页是自动生成的，不用手动登记。

## 目录结构

```text
src/
├── content/blog/     # 文章
├── data/             # 站点配置：site / projects / theme / music / icons
├── pages/            # 路由：首页、项目、关于、博客（列表/分页/标签/详情）、rss、robots、404
├── layouts/          # BaseLayout（壳）、BlogPost（文章页）
├── components/       # 导航、页脚、卡片、播放器、壁纸、粒子、Live2D 等
├── lib/              # 文章排序、标签统计、日期格式化
└── styles/           # tokens（设计变量）、global、prose（正文排版）
public/               # 原样发布：头像、favicon、音频
```

## 部署

Cloudflare Pages 项目名 `yuki`，配置在 `wrangler.toml`。

> **注意：正常发布走本地直传，不要指望 git push。**
> 音频文件被 `.gitignore` 排掉了（公开仓库，进了历史删不干净），
> 所以任何一次 push 触发的自动构建都会把线上的音乐抹掉。

```bash
pnpm build && rm -f dist/music/README.md && wrangler pages deploy dist --project-name=yuki
```

推完代码发现音乐没了，就是被自动构建覆盖了，重跑上面这条即可。原委和加歌步骤见 [`public/music/README.md`](public/music/README.md)。

## 几个说明

- **壁纸和立绘默认用的是随机二次元图 API**（`t.alcy.cc`），内容不完全可控。想固定下来就把图片放进 `public/`，在 `src/data/theme.ts` 里改成本地路径。
- **Live2D 默认关**（`theme.live2d: false`）。开了会从 CDN 加载，窄屏（<820px）自动不加载。
- **图标来自 [phosphor-icons](https://phosphoricons.com)（MIT）**，只拷了用到的 path 进 `src/data/icons.ts`。
- `public/` 里的东西会被原样发布，别往里放不想公开的文件。
