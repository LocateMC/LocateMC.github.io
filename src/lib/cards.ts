// src/lib/cards.ts
// 卡片文件读写公共逻辑：POST / PUT 接口共用
import fs from 'node:fs/promises';
import path from 'node:path';

export const NAV_DIR = path.join(process.cwd(), 'src', 'content', 'nav');
export const ICON_DIR = path.join(process.cwd(), 'public', 'icons');

// 与前端渲染一致的分类 / 子分类排序规则（用于生成风格统一的文件名前缀）
export const categoryOrder: Record<string, number> = { '官方': 1, '社区': 2, '百科': 3, '资源': 4, '服务端': 5, '在线工具': 6, '软件程序': 7, '工作室 & 组织': 8, '博客': 9, '开发': 10, '市场': 11, '收纳': 50 };
export const subcategoryOrder: Record<string, Record<string, number>> = {
  '百科': { '百科': 1, '教程、文档': 2 },
  '资源': { '综合': 1, '地图、投影': 2, '模组、整合包': 3, '纹理、资源包、光影': 4 },
  '服务端': { '原版核心': 1, 'Bukkit·Paper系': 2, 'Folia系': 3, 'Mod服核心': 4, '混合端': 5, '代理端': 6, '基岩': 7, '互通': 8 },
  '软件程序': { '启动器': 1, '版本库': 2, '实用工具（PC）': 3, '实用工具（Android）': 4, '服务器面板': 5 },
  '开发': { 'Java 模组': 1, 'Java 光影': 2, 'Java 服务端': 3, '基岩': 4, '基岩 服务端': 5 },
  '在线工具': { '综合工具集': 1, '种子与地图': 2, '查询与素材库': 3, '皮肤与装扮': 4, '文字与排版': 5, '像素画与建筑': 6, '命令与数据包': 7, '资源包与定制': 8, '服务器与开发者': 9 },
  '市场': { '市场目录': 1, '合作伙伴': 2 },
};

export interface CardPayload {
  title: string;
  href: string;
  category: string;
  description: string;
  subcategory: string;
  icon: string;
  tags: string[];
  order: number;
  body: string;
}

// 标题 → 安全文件名片段（保留中文，其余字符转连字符）
export function slugify(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
  return slug || 'card';
}

// 单行 YAML 字段安全转义
function yq(value: string): string {
  return '"' + String(value ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

// 校验并规范化请求体；返回 { ok, payload } 或 { ok: false, error }
export function normalizePayload(raw: Record<string, unknown>): { ok: true; payload: CardPayload } | { ok: false; error: string } {
  const title = String(raw.title ?? '').trim();
  const href = String(raw.href ?? '').trim();
  const category = String(raw.category ?? '').trim();
  if (!title) return { ok: false, error: '标题（title）必填' };
  if (!href) return { ok: false, error: '链接（href）必填' };
  if (!category) return { ok: false, error: '分类（category）必填' };
  try {
    new URL(href);
  } catch {
    return { ok: false, error: '链接不是合法 URL，需以 http(s):// 开头' };
  }

  const payload: CardPayload = {
    title,
    href,
    category,
    description: String(raw.description ?? '').trim(),
    subcategory: String(raw.subcategory ?? '').trim(),
    icon: String(raw.icon ?? '').trim(),
    tags: String(raw.tags ?? '')
      .split(/[,，]/)
      .map(s => s.trim())
      .filter(Boolean),
    order: Number.isFinite(Number(raw.order)) ? Number(raw.order) : 99,
    body: String(raw.body ?? '').trim(),
  };
  return { ok: true, payload };
}

// 由 payload 生成文件名（仅新增时使用；更新保持原文件名不变）
export function buildFilename(payload: CardPayload): string {
  const catIdx = categoryOrder[payload.category] ?? 99;
  const subIdx = payload.subcategory ? (subcategoryOrder[payload.category]?.[payload.subcategory] ?? 99) : 0;
  const slug = slugify(payload.title);
  return subIdx > 0 ? `${catIdx}-${subIdx}-${payload.order}-${slug}.md` : `${catIdx}-${payload.order}-${slug}.md`;
}

// 生成完整 Markdown 文件内容
export function buildMarkdown(payload: CardPayload): string {
  const fm = [
    '---',
    `title: ${yq(payload.title)}`,
    `description: ${yq(payload.description || payload.title)}`,
    `href: ${yq(payload.href)}`,
    `icon: ${yq(payload.icon || '/icons/sample.png')}`,
    `category: ${yq(payload.category)}`,
    ...(payload.subcategory ? [`subcategory: ${yq(payload.subcategory)}`] : []),
    ...(payload.tags.length ? [`tags: ${JSON.stringify(payload.tags)}`] : []),
    `order: ${payload.order}`,
    '---',
    '',
  ].join('\n');
  const body = payload.body || `### 基本介绍\n\n${payload.description || payload.title}`;
  return fm + body + '\n';
}

// 卡片文件名白名单校验（防路径穿越）
export function isValidCardId(id: string): boolean {
  return /^[\w\u4e00-\u9fa5-]+\.md$/.test(id) && !id.includes('..') && !id.includes('/') && !id.includes('\\');
}

export async function fileExists(filePath: string): Promise<boolean> {
  return fs.access(filePath).then(() => true).catch(() => false);
}
