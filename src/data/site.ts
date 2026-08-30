/*
 * 站点中心配置 —— 想改名字、简介、链接、导航，都在这里改一处即可。
 */

/*
 * ⚠️ 部署前必填 ⚠️
 * 下面几项留空时，对应的图标 / 按钮不会渲染出来，
 * 所以线上不会出现「点了没反应」的死链接。填一项就多出一项。
 * 站点域名不在这里 —— 在 astro.config.mjs 顶部的 SITE_URL。
 */
export const profile = {
  /** GitHub 用户名，例如 "yuki"（不要带 https://） */
  github: "Yuki-114514",
  /** X / Twitter 用户名，例如 "yuki"（不要带 @） */
  twitter: "",
  /** Bilibili 空间 UID，例如 "12345678" */
  bilibili: "3546698731227302",
  /** 联系邮箱，例如 "yuki@example.com" */
  email: "ducphungduong498@gmail.com",
} as const;

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

/** 只保留 profile 里真正填了的那几个 */
const social: SocialLink[] = [
  profile.github && {
    name: "GitHub",
    url: `https://github.com/${profile.github}`,
    icon: "github",
  },
  profile.twitter && {
    name: "Twitter",
    url: `https://twitter.com/${profile.twitter}`,
    icon: "twitter",
  },
  profile.bilibili && {
    name: "Bilibili",
    url: `https://space.bilibili.com/${profile.bilibili}`,
    icon: "bilibili",
  },
  profile.email && {
    name: "邮箱",
    url: `mailto:${profile.email}`,
    icon: "mail",
  },
  { name: "RSS", url: "/rss.xml", icon: "rss" },
].filter((s): s is SocialLink => Boolean(s));

export const site = {
  /** 用于 <title> 和 SEO 的站点名 */
  name: "Yuki",
  fullName: "Yuki",
  handle: "@yuki",
  /** 头衔，出现在导航与 hero */
  role: "格物 · 造物",
  /** hero 主标语 */
  tagline: "念起成物，事过成文。",
  /** hero 下方的一句自我介绍 */
  intro:
    "搞机器人和 AI，也唱歌弹琴看动漫。还在到处试，看看以后走哪条路。",
  /** 关于页用的更长自述，一段一个字符串。空数组时整块不渲染 */
  about: [
    "还在读大学，正到处试，想看看以后走哪条路。现在主要在搞机器人和 AI，也自己写点小工具——做的具体是什么隔一阵就换，起因倒是一直没变：用着一个东西，忽然想知道它里面是怎么回事，接着就想自己做一个试试。",
    "我挺爱琢磨的，做东西也比较轴，喜欢把它拆开来看，没弄懂的地方不太愿意往下走。所以常常绕远路，进度也慢，好处是回头返工少一些。",
    "不写代码的时候唱歌、弹琴，也看动漫、打游戏。这个站长成现在这个样子，大概就是因为这些。站是我自己写的，做过的东西在项目页，想明白的和还没想明白的写在博客。",
  ] as string[],
  email: profile.email,
  /** 留空则「关于」页只显示 role，不会留个孤零零的分隔点 */
  location: "",
  /** 由 astro.config.mjs 的 SITE_URL 注入，不要在这里改 */
  url: import.meta.env.SITE ?? "http://localhost:4321",

  social,

  nav: [
    { label: "首页", href: "/" },
    { label: "项目", href: "/projects" },
    { label: "博客", href: "/blog" },
    { label: "关于", href: "/about" },
  ] as NavItem[],

  /** 空数组时「我的工具箱」整块不渲染 */
  skills: [
    {
      label: "机器人",
      accent: "sakura",
      items: ["C++", "ROS 2", "行为树", "tf2", "Eigen"],
    },
    {
      label: "感知与部署",
      accent: "sky",
      items: ["OpenCV", "PCL", "ONNX Runtime"],
    },
  ] as SkillGroup[],

  /** 空数组时「一路走来」整块不渲染 */
  timeline: [
    {
      when: "2025.09",
      title: "加入 RoboMaster 战队",
      desc: "从零开始接触机器人和 ROS。",
    },
    {
      when: "2026.05",
      title: "接手哨兵",
      desc: "负责决策、导航与下位机通信协议。",
    },
    {
      when: "2026.06",
      title: "开始做 text2voice",
      desc: "想把小说听成有声书，市面上没有满意的，就自己写一个。",
    },
    {
      when: "2026.07",
      title: "搭起自己的学习系统",
      desc: "用可核查的证据判断掌握程度，而不是「看完了」。",
    },
  ] as TimelineItem[],
} as const;

export type Site = typeof site;
