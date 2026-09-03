// src/pages/api/search-index.json.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request }) => {
  // 1. 从内容集合中获取所有导航数据
  const allNavEntries = await getCollection('nav');

  // 2. 将数据映射为 Fuse.js 需要的格式，只包含需要搜索的字段
  const searchIndex = allNavEntries.map(entry => ({
    id: entry.id, // 我们需要一个唯一标识符来告诉主页哪个卡片匹配了
    title: entry.data.title,
    description: entry.data.description,
    href: entry.data.href,
    tags: entry.data.tags || [], // 确保 tags 存在，即使是空数组
  }));
  
  // 3. 返回一个 JSON 响应
  return new Response(JSON.stringify(searchIndex));
}