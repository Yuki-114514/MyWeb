# MyWeb — 个人静态站

一个用 Astro 7 构建的个人网站，包含首页、项目、关于、博客、RSS 和音乐播放器。站点完全静态生成，不依赖后端服务或 React、Vue 等前端运行时。

- 在线站点：<https://yuki-2fo.pages.dev>
- 输出方式：Astro static build
- 部署目标：Cloudflare Pages
- 当前状态：可构建、可部署；博客集合尚无文章

## 站点有什么

- 集中配置的个人介绍、导航、社交链接、技能和时间线；
- 首页精选项目与独立项目页；
- Markdown 博客、标签、分页、RSS、sitemap 和 robots.txt；
- 跟随深浅色主题的代码高亮；
- 随机壁纸、首页立绘和短句；
- 使用本地音频文件的音乐播放器；
- 自托管字体和少量原生浏览器脚本。

可选字段为空时，对应页面区块不会渲染，避免出现空卡片或无效链接。

## 本地运行

### 前置条件

- Node.js 22 或更高版本；
- Corepack；
- pnpm 11，具体版本由 `package.json` 的 `packageManager` 固定。

### 安装与启动

```bash
corepack enable
pnpm install
pnpm dev
```

开发服务器默认位于 <http://localhost:4321>。

### 可用命令

| 命令 | 结果 |
|---|---|
| `pnpm dev` | 启动 Astro 开发服务器 |
| `pnpm check` | 检查 TypeScript、Astro 文件和内容集合 schema |
| `pnpm build` | 生成静态站到 `dist/` |
| `pnpm preview` | 本地预览 `dist/` 中的构建结果 |
| `pnpm deploy` | 构建并直接上传到 Cloudflare Pages 项目 `yuki` |

修改后至少运行：

```bash
pnpm check
pnpm build
```

## 内容从哪里改

站点的可变内容主要位于 `src/data/`，不需要进入组件中逐处修改。

| 要修改的内容 | 文件 |
|---|---|
| 站点域名、canonical URL、sitemap 基址 | `astro.config.mjs` 中的 `SITE_URL` |
| 名字、简介、导航、社交链接、技能、时间线 | `src/data/site.ts` |
| 首页精选项目和项目页列表 | `src/data/projects.ts` |
| 壁纸、头像、立绘、随机短句和显示开关 | `src/data/theme.ts` |
| 音乐播放器歌单 | `src/data/music.ts` |
| 可用图标 | `src/data/icons.ts` |
| 博客 schema | `src/content.config.ts` |

## 写第一篇文章

博客使用 Astro Content Collections。文章目录当前尚未创建，因此 `pnpm check` 和 `pnpm build` 会提示空集合目录不存在；这是一条已知 warning，不会阻止构建。

创建目录和文章：

```bash
mkdir -p src/content/blog
```

在 `src/content/blog/` 中新增 Markdown 文件。文件名会成为 URL 的最后一段，例如 `hello.md` 对应 `/blog/hello`。

frontmatter 字段以 `src/content.config.ts` 为准：

```yaml
---
title: 文章标题
description: 用于列表页和 SEO 的摘要
pubDate: 2026-08-30
updatedDate: 2026-08-31 # 可选
tags: [Astro]          # 可选
icon: flower           # 可选，取值见 src/data/icons.ts
draft: false           # 可选；true 时不进入公开列表
---
```

## 目录结构

```text
src/
├── components/       # 导航、卡片、播放器、背景等页面组件
├── content/          # Markdown 内容；当前尚无 blog 子目录
├── data/             # 站点、项目、主题、音乐和图标配置
├── layouts/          # 页面与文章布局
├── lib/              # 内容排序、标签和日期辅助逻辑
├── pages/            # 首页、关于、项目、博客、RSS、robots、404
└── styles/           # 设计变量、全局样式和正文排版
public/               # 原样复制到构建产物的静态资源
dist/                 # 构建结果，不作为源码编辑
```

## 部署到 Cloudflare Pages

部署脚本依赖本机能够调用且已经登录的 Wrangler；Wrangler 当前不是 `package.json` 中的项目依赖。

```bash
pnpm deploy
```

音乐文件是一个特殊边界：`public/music/` 中的 MP3 和封面图片被 Git 忽略，只保存在本机。Git 集成触发的云端构建拿不到这些文件，可能覆盖掉线上已有音乐。因此完整发布必须使用本地直传，不能只依赖 `git push`。

添加音乐、提取封面、Cloudflare 文件限制和恢复步骤见 [`public/music/README.md`](public/music/README.md)。只发布你有权公开使用的音频和图片。

## 已知边界

- 当前没有博客文章，空内容集合会产生 warning；
- 随机远程图片的具体内容不完全由本站控制，若需要稳定外观应改成本地资源；
- 音乐不在 Git 中，干净克隆不能完整还原线上媒体；
- `public/` 中的文件会被直接发布，不要放入凭证、私人文件或不应公开的素材；
- 本仓库没有根 `LICENSE` 文件。源码公开可见不代表已授予复制、修改或再分发许可。
