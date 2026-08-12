/*
 * 项目列表 —— 在这里增删你的作品。
 * accent 决定卡片配色：sakura(粉) / sky(蓝) / mint(绿) / lavender(紫)
 * icon 是 Phosphor duotone 图标名，可用值见 src/components/Icon.astro。
 * featured: true 的项目会出现在首页精选区。
 */

import type { IconName } from "@/data/icons";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: IconName;
  accent: "sakura" | "sky" | "mint" | "lavender";
  /** 线上地址，可选 */
  url?: string;
  /** 源码地址，可选 */
  repo?: string;
  /** 年份，用于排序展示 */
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Mochi 待办",
    description:
      "一个软乎乎的待办清单应用。支持手势拖拽、番茄钟和每日心情记录，界面像棉花糖一样温柔。",
    tags: ["React", "TypeScript", "PWA"],
    icon: "list-heart",
    accent: "sakura",
    url: "https://example.com",
    repo: "https://github.com/",
    year: "2024",
    featured: true,
  },
  {
    title: "Hoshi 天气",
    description:
      "会讲故事的天气小站。根据天气自动切换插画与配色，下雨天还会有小水滴顺着屏幕滑下来。",
    tags: ["Astro", "Canvas", "API"],
    icon: "cloud-sun",
    accent: "sky",
    url: "https://example.com",
    year: "2024",
    featured: true,
  },
  {
    title: "菜谱抽签机",
    description:
      "「今天吃什么」终结者。摇一摇随机推荐一道菜，附带步骤和购物清单，再也不用纠结啦。",
    tags: ["Vue", "Node.js"],
    icon: "cooking-pot",
    accent: "mint",
    repo: "https://github.com/",
    year: "2023",
    featured: true,
  },
  {
    title: "像素花园",
    description:
      "一个可以慢慢养的像素小花园。每写一篇日记就长出一株植物，坚持越久，花园越热闹。",
    tags: ["TypeScript", "Canvas", "IndexedDB"],
    icon: "plant",
    accent: "lavender",
    url: "https://example.com",
    year: "2023",
    featured: true,
  },
  {
    title: "字帖生成器",
    description:
      "输入文字，一键生成可打印的手写练习字帖。支持多种字体田字格，练字党的小福利。",
    tags: ["React", "SVG", "打印"],
    icon: "pencil-ruler",
    accent: "sakura",
    repo: "https://github.com/",
    year: "2022",
  },
  {
    title: "番剧追番表",
    description:
      "记录正在追的番，自动同步更新时间，到点温柔提醒你「新一集出来啦」。",
    tags: ["Next.js", "PostgreSQL"],
    icon: "television",
    accent: "sky",
    url: "https://example.com",
    year: "2022",
  },
];
