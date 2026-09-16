// src/pages/api/nav-detail.json.ts
// 导航条目「详情正文」数据源。
// 背景：原先 CardDetailModal 用 <script define:vars={{ navData }}> 把 268 条条目的
// 完整 Markdown 正文内联进每个页面的 HTML（约 228K 字符 / 450KB 字节），
// 导致资源页等完全用不到该数据的页面 HTML 也膨胀到 500KB，且 View Transitions
// 每次切换都要重新解析执行这段脚本。现改为按需 fetch 本端点。
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const allNavEntries = await getCollection('nav');

  // 只保留弹窗渲染需要的字段（可序列化）
  const details = allNavEntries.map(entry => ({
    id: entry.id,
    body: entry.body,
    data: {
      title: entry.data.title,
      description: entry.data.description,
      href: entry.data.href,
      icon: entry.data.icon,
    },
  }));

  return new Response(JSON.stringify(details), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
