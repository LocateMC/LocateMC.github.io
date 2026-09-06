# -*- coding: utf-8 -*-
"""
LocateMC 图标优化：重采样到最长边 128px + 统一转 WebP
用法: python optimize_icons.py <icons目录> [--delete-old]
  - 处理 png / jpg / jpeg / ico / webp（ico 一并转 webp，卡片只显示 44px）
  - svg / avif 保持不动（已是矢量或高压缩）
  - 默认只生成 .webp；加 --delete-old 才会删除被替换掉的原始文件（务必先备份！）
依赖: Pillow
注意: 转换后需把 md frontmatter 的 icon 字段、carousel.json、代码里硬编码的
      /icons/*.png 等引用统一改成 .webp（可用 fix_icon_refs.py）
"""
import os
import sys
from PIL import Image

TARGET = 128          # 卡片显示 44px，@3x = 132px
QUALITY = 88
CONVERT = {'.png', '.jpg', '.jpeg', '.ico', '.webp'}


def main():
    if len(sys.argv) < 2:
        print('用法: python optimize_icons.py <icons目录> [--delete-old]')
        sys.exit(1)
    icons = sys.argv[1]
    delete_old = '--delete-old' in sys.argv

    before = after = 0
    converted = 0
    skipped = []
    for fn in sorted(os.listdir(icons)):
        p = os.path.join(icons, fn)
        if not os.path.isfile(p):
            continue
        ext = os.path.splitext(fn)[1].lower()
        size = os.path.getsize(p)
        before += size
        if ext not in CONVERT:
            skipped.append(fn)
            after += size
            continue
        try:
            im = Image.open(p)
            im.load()
        except Exception as e:
            print(f'  [跳过] {fn}: {e}')
            after += size
            continue
        w, h = im.size
        scale = min(1.0, TARGET / max(w, h))
        if scale < 1.0:
            im = im.resize((max(1, round(w * scale)), max(1, round(h * scale))), Image.LANCZOS)
        base = os.path.splitext(fn)[0]
        out = os.path.join(icons, base + '.webp')
        mode = 'RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB'
        im.convert(mode).save(out, 'WEBP', quality=QUALITY, method=6)
        new_size = os.path.getsize(out)
        after += new_size
        converted += 1
        if out != p and delete_old:
            os.remove(p)

    print(f'处理 {converted} 张 -> WebP；保持原样 {len(skipped)} 个（{", ".join(skipped[:6])}{"…" if len(skipped) > 6 else ""}）')
    print(f'体积: {before/1024/1024:.2f} MB -> {after/1024/1024:.2f} MB  (-{(1-after/before)*100:.0f}%)')
    if not delete_old:
        print('注意: 未删除原图（未加 --delete-old），记得清理前先确认备份到位')


if __name__ == '__main__':
    main()
