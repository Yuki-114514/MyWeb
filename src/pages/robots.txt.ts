import type { APIContext } from "astro";
import { site } from "@/data/site";

/* 动态生成，Sitemap 地址跟着 astro.config.mjs 的 SITE_URL 走，不用两处维护 */
export function GET(context: APIContext) {
  const origin = context.site ?? new URL(site.url);
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("/sitemap-index.xml", origin).href}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
