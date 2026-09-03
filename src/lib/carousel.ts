// src/lib/carousel.ts
// 轮播配置的读写与校验：数据存于 src/data/carousel.json
import fs from 'node:fs/promises';
import path from 'node:path';

export const CAROUSEL_FILE = path.join(process.cwd(), 'src', 'data', 'carousel.json');
export const BANNER_DIR = path.join(process.cwd(), 'public', 'banners');

export interface CarouselItem {
  id: string;
  mode: 'card' | 'image';
  cardId?: string;   // 模式一：引用的导航卡片 id（文件名）
  image?: string;    // 模式二：上传的图片路径
  title?: string;
  description?: string;
  href?: string;
  c1?: string;
  c2?: string;
}

export async function readCarousel(): Promise<CarouselItem[]> {
  try {
    const raw = await fs.readFile(CAROUSEL_FILE, 'utf-8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function writeCarousel(items: CarouselItem[]): Promise<void> {
  await fs.writeFile(CAROUSEL_FILE, JSON.stringify(items, null, 2), 'utf-8');
}

export function isValidSlideId(id: string): boolean {
  return /^[\w-]+$/.test(id) && !id.includes('..');
}

// 校验并规范化轮播项
export function normalizeItem(raw: Record<string, unknown>): { ok: true; item: CarouselItem } | { ok: false; error: string } {
  const mode = String(raw.mode ?? 'card');
  if (mode !== 'card' && mode !== 'image') {
    return { ok: false, error: '模式必须是 card（当前）或 image（上传图片）' };
  }

  const item: CarouselItem = {
    id: String(raw.id ?? '').trim(),
    mode,
  };

  if (mode === 'card') {
    const cardId = String(raw.cardId ?? '').trim();
    if (!cardId) return { ok: false, error: '模式一需要选择一张卡片' };
    if (!/^[\w\u4e00-\u9fa5-]+\.md$/.test(cardId)) return { ok: false, error: '卡片 id 不合法' };
    item.cardId = cardId;
  } else {
    const image = String(raw.image ?? '').trim();
    if (!image) return { ok: false, error: '模式二需要上传一张图片' };
    if (!/^\/(banners|icons)\/[\w\u4e00-\u9fa5.-]+$/.test(image)) return { ok: false, error: '图片路径不合法' };
    item.image = image;
    item.title = String(raw.title ?? '').trim();
    item.description = String(raw.description ?? '').trim();
    item.href = String(raw.href ?? '').trim();
    if (item.href) {
      try { new URL(item.href); } catch { return { ok: false, error: '链接不是合法 URL，需以 http(s):// 开头' }; }
    } else {
      item.href = '#';
    }
  }

  item.c1 = String(raw.c1 || '#1d9e75').trim();
  item.c2 = String(raw.c2 || '#0f6e56').trim();
  return { ok: true, item };
}
