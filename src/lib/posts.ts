import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** 每页文章数 */
export const PAGE_SIZE = 8;

/** 已发布的文章，按发布时间倒序 */
export async function getSortedPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

/** 全部标签，按出现次数从多到少 */
export function collectTags(posts: Post[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, "zh-CN"));
}

/** 标签页地址。中文标签交给 encodeURIComponent，浏览器和主机都能正常处理 */
export function tagHref(tag: string): string {
  return `/blog/tags/${encodeURIComponent(tag)}`;
}

/** 列表页第 n 页的地址（第 1 页就是 /blog） */
export function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export function totalPages(count: number): number {
  return Math.max(1, Math.ceil(count / PAGE_SIZE));
}
