/** 把日期格式化成「2024年11月2日」 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/** 简短日期「11月2日」 */
export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
  }).format(date);
}

/** 粗略估算中文阅读时长（约每分钟 400 字） */
export function readingTime(body: string): string {
  const chars = body.replace(/\s/g, "").length;
  const minutes = Math.max(1, Math.round(chars / 400));
  return `约 ${minutes} 分钟`;
}
