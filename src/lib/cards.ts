// src/lib/cards.ts
// 卡片文件读写公共逻辑：POST / PUT 接口共用
import fs from 'node:fs/promises';
import path from 'node:path';

export const NAV_DIR = path.join(process.cwd(), 'src', 'content', 'nav');
export const ICON_DIR = path.join(process.cwd(), 'public', 'icons');

// 与前端渲染一致的分类 / 子分类排序规则（用于生成风格统一的文件名前缀）
export const categoryOrder: Record<string, number> = { '官方': 1, '社区': 2, '百科': 3, '资源': 4, '服务端': 5, '在线工具': 6, '软件程序': 7, '工作室 & 组织': 8, '博客': 9, '开发': 10, '市场': 11, '收纳': 50 };

// 主分类 → nav 子文件夹（英文名）。导航内容按主分类分目录存放；
// 新建卡片时 buildFilename 会把文件写入对应子文件夹，保持目录结构一致。
export const categoryFolder: Record<string, string> = {
  '官方': 'official', '社区': 'community', '百科': 'wiki', '资源': 'resource',
  '服务端': 'server-software', '在线工具': 'tool', '软件程序': 'software',
  '工作室 & 组织': 'studio', '博客': 'blog', '开发': 'dev',
  '市场': 'marketplace', '收纳': 'others',
};
// ===== 卡片 slug 工具 =====
// 供「卡片详情页」路由与站内内链共用。放在 lib 而不是各 .astro 的 frontmatter 里，
// 是因为 Astro 在 getStaticPaths 中引用 frontmatter 作用域的函数并不可靠
// （实测报 `cardBase is not defined`），而从模块 import 始终可用。
//
// 内容集合的 entry.id 形如 `blog/9-1-tomorrow-land.md`：含目录名、扩展名，
// 文件名还带 admin 生成的排序前缀（<主分类序>-<子分类序>-）。
/** 取文件名（去目录、去扩展名）：`blog/9-1-tomorrow-land.md` → `9-1-tomorrow-land` */
export function navCardBase(id: string): string {
  return id.replace(/\.(md|mdx)$/i, '').split('/').pop() ?? id;
}
/**
 * URL 用的卡片 slug：剥掉**全部**排序前缀 → `tomorrow-land`；剥空则退回原名。
 *
 * 【2026-09-26 修复】原正则 `/^\d+-\d+-/` 只剥两段，而 admin 的 buildFilename 对
 * 「有子分类」的卡片生成三段前缀（`<主分类序>-<子分类序>-<order>-<slug>`），
 * 导致 172 张卡的 URL 残留一个序号段：
 *   `/nav/wiki/5-minecraft-developer-guide/`（应为 `minecraft-developer-guide`）
 *   `/nav/resource/2-13-creativemechanicserver/`（应为 `creativemechanicserver`）
 * 改为「贪婪剥掉所有 `数字 + 分隔符` 段」。分隔符含 `.`：个别历史文件名写作
 * `7-3-18.slopecraft.md`，其序号段以点收尾，仅认 `-` 会漏掉。
 * 安全性：只有「数字紧跟 - 或 .」才算前缀，正常的 `3dtext`（3D 文本生成器）不受影响。
 */
export function navCardSlug(id: string): string {
  const base = navCardBase(id);
  return base.replace(/^(?:\d+[.\-])+/, '') || base;
}

/**
 * 【2026-09-26】撞名消解：一次性算出 `entry.id → slug`，供**三处**共用。
 *
 * 为什么必须共用：详情页 URL 是 `/nav/<分类>/<slug>/`，slug 由**三个**地方各自产生 ——
 *   ① `pages/nav/[category]/[card].astro` 的 getStaticPaths（真正生成路由）
 *   ② `pages/nav/[category].astro` 的卡片链接（分类页 → 详情页）
 *   ③ `pages/nav/[category]/[card].astro` 的「相关推荐」（详情页互链）
 * 旧实现里 ① 有撞名回退、②③ 直接调 navCardSlug 裸值。只要出现同分类撞名，
 * ②③ 就会链到短 slug 而 ① 生成的是别的名字 → 死链。当前 284 张 0 撞名所以没爆，
 * 但这是「注定要爆」的结构性问题，故收敛成本函数。
 *
 * 规则：
 * - 撞名只可能在**同一分类**内发生（URL 前缀 `/nav/<分类>/` 已隔离），故按分类分组独立消解；
 * - 「剥前缀后天然唯一」的 slug 优先占名（先全量预占），避免后补的 `-2` 抢走别的卡的本名；
 * - 撞名的按 **entry.id 升序**依次追加 `-2`、`-3`…（保持 URL 短，而不是退回长文件名）；
 * - 后缀号跳过已被占用的名字（含其它卡的本名），最终仍冲突则退回文件名 `base`（同目录内唯一）；
 * - 分配顺序与 `getCollection()` 的返回顺序无关（函数内按 id 排序），因此任何调用方、
 *   任何构建次数拿到的结果都逐字相同 —— 否则 URL 会在构建之间漂移。
 */
export function buildNavSlugMap(entries: { id: string; category: string }[]): Map<string, string> {
  interface Row { id: string; base: string; short: string }
  const groups = new Map<string, Row[]>();
  for (const e of entries) {
    // 按 URL 目录分组：不同主分类即便撞名也不冲突
    const folder = categoryFolder[e.category] ?? e.category;
    const row: Row = { id: e.id, base: navCardBase(e.id), short: navCardSlug(e.id) };
    const arr = groups.get(folder);
    if (arr) arr.push(row);
    else groups.set(folder, [row]);
  }

  const map = new Map<string, string>();
  for (const rows of groups.values()) {
    rows.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

    const count = new Map<string, number>();
    for (const r of rows) count.set(r.short, (count.get(r.short) ?? 0) + 1);

    // 预占「天然唯一」的短 slug：这些名字不可被别人的后缀占用
    const taken = new Set<string>();
    for (const r of rows) if (count.get(r.short) === 1) taken.add(r.short);

    for (const r of rows) {
      if (count.get(r.short) === 1) { map.set(r.id, r.short); continue; }
      let slug = r.short;
      if (taken.has(slug)) {
        let n = 2;
        while (n <= 100 && taken.has(`${r.short}-${n}`)) n++;
        slug = n <= 100 ? `${r.short}-${n}` : r.base;
        if (taken.has(slug)) { // base 也被占（正常不可能），再顺延
          let m = 2;
          while (taken.has(`${slug}-${m}`)) m++;
          slug = `${slug}-${m}`;
        }
      }
      taken.add(slug);
      map.set(r.id, slug);
    }
  }
  return map;
}

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

// 由 payload 生成文件相对路径（含主分类子文件夹；仅新增时使用；更新保持原文件路径不变）
export function buildFilename(payload: CardPayload): string {
  const catIdx = categoryOrder[payload.category] ?? 99;
  const subIdx = payload.subcategory ? (subcategoryOrder[payload.category]?.[payload.subcategory] ?? 99) : 0;
  const slug = slugify(payload.title);
  const base = subIdx > 0 ? `${catIdx}-${subIdx}-${payload.order}-${slug}.md` : `${catIdx}-${payload.order}-${slug}.md`;
  const folder = categoryFolder[payload.category];
  return folder ? `${folder}/${base}` : base;
}

// 生成完整 Markdown 文件内容
export function buildMarkdown(payload: CardPayload): string {
  const fm = [
    '---',
    `title: ${yq(payload.title)}`,
    `description: ${yq(payload.description || payload.title)}`,
    `href: ${yq(payload.href)}`,
    `icon: ${yq(payload.icon || '/icons/sample.webp')}`,
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

// 卡片相对路径白名单校验（防路径穿越）。
// 允许 `/` 作为子文件夹分隔（如 official/1-1-minecraft-net.md），
// 但禁止 `..`、`\\`、首尾 `/`、连续 `//`（`.` 不在允许字符集内，`..` 天然无法匹配）。
export function isValidCardId(id: string): boolean {
  return /^[\w\u4e00-\u9fa5-]+(?:\/[\w\u4e00-\u9fa5-]+)*\.md$/.test(id);
}

export async function fileExists(filePath: string): Promise<boolean> {
  return fs.access(filePath).then(() => true).catch(() => false);
}
