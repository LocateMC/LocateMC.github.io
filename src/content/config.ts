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

// ===== 资源库（/resource 页面）=====
// 收录"单条资源"——光影/资源包/纹理/模组/地图及投影/数据包/Add-On/插件 等。
// 与 nav 集合的"资源门户站导航"语义独立；导航页维持原状不动。
const resourceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // 作者/制作者（截图中显示为 "by <author>"）
    author: z.string().optional().default('—'),
    // 卡片短描述（2 行截断）
    summary: z.string().optional().default(''),
    // 资源主链接（下载页 / 官网 / 仓库等）
    href: z.string().url(),
    // 卡片左下角品牌方块图标
    icon: z.string().default('/icons/sample.webp'),
    // 卡片顶部大图（实拍截图/封面）；缺省时用纯色渐变占位
    screenshot: z.string().optional(),

    // 资源类型 —— 须与 /resource 页面 6 个分类 Tab 名称 1:1 一致：
    // '地图及投影' | '模组及附加包' | '纹理及资源包' | '光影及着色器' | '模组整合包' | '服务器插件'
    // （页面按其筛选，两侧不同步会导致资源不显示）
    type: z.string(),
    // 适用客户端：Java / 基岩 / 双端（筛选栏"版本"联动依据）
    edition: z.enum(['Java', '基岩', '双端']).optional(),
    // 主加载器/平台（渲染为 chips；可同时支持多个）。
    // 取值随 edition 约定：Java → NeoForge/Fabric/Forge/数据包；基岩 → 行为包
    loaders: z.array(z.string()).optional().default([]),
    // 备选加载器（截图风格："iris  or  OptiFine"，作为外链）
    loaderAlt: z.object({ name: z.string(), href: z.string().url() }).optional(),
    // 适配的 MC 版本号列表（支持多版本，如 ['1.21.1', '1.20.1']；
    // 基岩侧通常写主版本号如 ['1.21', '1.20']）。值须与 /resource 左栏
    // 「版本号」筛选项对齐，否则资源筛不出来。
    versions: z.array(z.string()).optional().default([]),
    // 模组功能类型（仅「模组及附加包」Tab 使用；筛选项单选，取值须与左栏
    // 「类型」列表一致）：科技 / 魔法 / 冒险 / 农业 / 装饰 / 实用 / 辅助 / 魔改 / 库 / 其它
    genre: z.string().optional(),

    // 光影专项筛选（仅 type 包含 "光影" 时有意义；为空也不影响其它类型）
    style: z.enum(['Cursed', 'Fantasy', 'Realistic', 'Semi Realistic', 'Vanilla Like']).optional(),
    features: z.array(z.string()).optional().default([]), // Atmosphere/Bloom/Colored Lighting/...
    performance: z.enum(['Potato', 'Low', 'Medium', 'High', 'Screenshot']).optional(),

    // 社交数据（底部数据条）：全部可选，缺则不渲染对应图标
    downloads: z.number().optional(),
    likes: z.number().optional(),
    // ISO 日期字符串；前端渲染为 "X days ago"
    updated: z.string().optional(),

    // 自由 tags（卡片底部胶囊条）
    tags: z.array(z.string()).optional().default([]),
    // 排序
    order: z.number(),
  }),
});

export const collections = {
  'nav': navCollection,
  'resources': resourceCollection,
};