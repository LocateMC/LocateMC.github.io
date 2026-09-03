// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const navCollection = defineCollection({
  type: 'content', // 导航项：Markdown 文件映射
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string().url(),
    icon: z.string(), // 图标路径
    category: z.string(), // 主分类
    subcategory: z.string().optional(), // 子分类 (可选)
    tags: z.array(z.string()).optional(), // 标签 (可选)
    order: z.number(), // 顺序（数字）
  }),
});

export const collections = {
  'nav': navCollection,
};