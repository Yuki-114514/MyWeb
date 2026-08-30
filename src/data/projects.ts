/*
 * 项目列表 —— 在这里增删你的作品。
 * accent 决定卡片配色：sakura(粉) / sky(蓝) / mint(绿) / lavender(紫)
 * icon 是 Phosphor duotone 图标名，可用值见 src/components/Icon.astro。
 * featured: true 的项目会出现在首页精选区。
 *
 * 空数组时：/projects 显示「还没有项目，敬请期待呀」，首页的精选区整块不渲染。
 * 加第一个项目时，把下面注释掉的模板复制出来改就行。
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
    title: "text2voice",
    description:
      "把中文小说做成多角色有声书。LLM 标注谁在说话、什么情绪，产出可人工修改的脚本与选角表，确认后再逐句合成语音、混入配乐，导出 mp3 / m4b。逐句缓存按文本与音色指纹寻址，只重合成改动过的句子。",
    tags: ["Python", "LLM", "IndexTTS2", "ffmpeg"],
    icon: "chats-circle",
    accent: "sakura",
    repo: "https://github.com/Yuki-114514/text2voice",
    year: "2026",
    featured: true,
  },
  {
    title: "RoboMaster 哨兵机器人",
    description:
      "学校 RoboMaster 战队的团队项目，哨兵是全自主机器人。我负责决策、导航与下位机通信：行为树决策引擎、底盘姿态的三层优先级仲裁、云台统一控制，以及多仓工作区的拆分与同步工具。",
    tags: ["C++", "ROS 2", "行为树", "团队项目"],
    icon: "rocket",
    accent: "sky",
    year: "2026",
    featured: true,
  },
  {
    title: "learn",
    description:
      "给自己搭的长期学习系统。用可核查的证据判断掌握程度——每条记录都标明是无提示产出还是重度支架，「讲过了」不算学会。目前在跑 CS144 和 Princeton Algorithms。",
    tags: ["Markdown", "Agent 协议", "自学"],
    icon: "plant",
    accent: "mint",
    repo: "https://github.com/Yuki-114514/learn",
    year: "2026",
  },
  {
    title: "这个小站",
    description:
      "你正在看的这个站。Astro 静态站，零运行时 JavaScript，部署在 Cloudflare Pages。",
    tags: ["Astro", "TypeScript"],
    icon: "flower",
    accent: "lavender",
    repo: "https://github.com/Yuki-114514/MyWeb",
    year: "2026",
  },
];
