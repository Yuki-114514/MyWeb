import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { iconNames } from "@/data/icons";

/*
 * 博客内容集合。
 * 写新文章：在 src/content/blog/ 里新建一个 .md 文件，
 * 顶部按下面的字段填 frontmatter 即可，文件名就是网址。
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    icon: z.enum(iconNames).default("flower"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
