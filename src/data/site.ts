/*
 * 站点中心配置 —— 想改名字、简介、链接、导航，都在这里改一处即可。
 */

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "twitter" | "mail" | "bilibili" | "rss";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
  accent: "sakura" | "sky" | "mint" | "lav";
}

export interface TimelineItem {
  when: string;
  title: string;
  desc: string;
}

export const site = {
  /** 用于 <title> 和 SEO 的站点名 */
  name: "Yuki",
  fullName: "Yuki Aoki",
  handle: "@yuki",
  /** 头衔，出现在导航与 hero */
  role: "开发者 · 写作者",
  /** hero 主标语 */
  tagline: "把想法揉成代码，也揉成文字。",
  /** hero 下方的一句自我介绍 */
  intro:
    "你好呀，我是 Yuki —— 一个喜欢造小工具、也喜欢把日常写下来的独立开发者。这里收着我的作品、文字，和一些软软的碎碎念。",
  /** 关于页用的更长自述 */
  about: [
    "我是 Yuki，一名独立开发者兼业余写作者。白天写代码，晚上写字，偶尔也画点小东西。",
    "我着迷于「小而美」的软件——那些界面干净、用起来顺手、还带点温度的小工具。比起把功能堆满，我更愿意花时间把一个细节打磨到刚刚好。",
    "写博客是我整理思绪的方式。技术笔记、生活随想、看番心得，什么都写一点。如果哪篇碰巧帮到了你，那就太好啦。",
  ],
  email: "hello@example.com",
  location: "地球某处 · UTC+8",
  /** 部署后换成你的真实域名 */
  url: "https://example.com",

  social: [
    { name: "GitHub", url: "https://github.com/", icon: "github" },
    { name: "Twitter", url: "https://twitter.com/", icon: "twitter" },
    { name: "Bilibili", url: "https://space.bilibili.com/", icon: "bilibili" },
    { name: "邮箱", url: "mailto:hello@example.com", icon: "mail" },
  ] as SocialLink[],

  nav: [
    { label: "首页", href: "/" },
    { label: "项目", href: "/projects" },
    { label: "博客", href: "/blog" },
    { label: "关于", href: "/about" },
  ] as NavItem[],

  skills: [
    {
      label: "前端",
      accent: "sakura",
      items: ["TypeScript", "React", "Astro", "CSS / 动效", "设计系统"],
    },
    {
      label: "后端",
      accent: "sky",
      items: ["Node.js", "Python", "PostgreSQL", "REST / RPC"],
    },
    {
      label: "工具 & 其他",
      accent: "mint",
      items: ["Git", "Figma", "Linux", "一点点插画"],
    },
  ] as SkillGroup[],

  timeline: [
    {
      when: "现在",
      title: "独立开发 & 写作",
      desc: "做自己的小产品，顺手把过程写成博客。",
    },
    {
      when: "2023",
      title: "某科技公司 · 前端工程师",
      desc: "负责设计系统与核心页面的体验打磨。",
    },
    {
      when: "2021",
      title: "计算机科学 · 学士",
      desc: "在这里第一次爱上把想法变成能跑的东西。",
    },
  ] as TimelineItem[],
} as const;

export type Site = typeof site;
