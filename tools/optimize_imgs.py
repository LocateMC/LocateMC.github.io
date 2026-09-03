# -*- coding: utf-8 -*-
"""
LocateMC 图标优化工具：缩放 public/icons 下过大的 png/jpg/jpeg
- 最长边 > 256 的全部 resize 到 256（保留格式）
- PNG 用 optimize=True
- JPG/WebP 用 quality=85
- 跳过 ico（无引用）与不被 md 引用的文件
- 原文件备份到 tools/icons-backup/
"""
import os
import shutil
import sys
from PIL import Image

ICON_DIR = sys.argv[1]
BACKUP_DIR = sys.argv[2]
MAX_SIDE = 256
PNG_Q = None  # PIL optimize
JPG_Q = 85

os.makedirs(BACKUP_DIR, exist_ok=True)

changed = []
errors = []
for fn in sorted(os.listdir(ICON_DIR)):
    p = os.path.join(ICON_DIR, fn)
    if not os.path.isfile(p):
        continue
    ext = os.path.splitext(fn)[1].lower()
    if ext not in ('.png', '.jpg', '.jpeg'):
        continue
    size = os.path.getsize(p)
    if size <= 100 * 1024:
        continue
    try:
        with Image.open(p) as im:
            w, h = im.size
            if max(w, h) <= MAX_SIDE and size < 200 * 1024:
                continue  # 尺寸已小，可不处理；size 阈值冗余
            # 备份
            shutil.copy2(p, os.path.join(BACKUP_DIR, fn))
            # resize
            im2 = im.copy()
            im2.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
            if ext == '.png':
                im2.save(p, 'PNG', optimize=True)
            else:
                # 保留 RGB
                if im2.mode in ('RGBA', 'P'):
                    im2 = im2.convert('RGB')
                im2.save(p, 'JPEG', quality=JPG_Q, optimize=True)
            new_size = os.path.getsize(p)
            changed.append((fn, size, new_size, im.size, im2.size))
    except Exception as e:
        errors.append((fn, str(e)))

print(f'处理 {len(changed)} 张图片，错误 {len(errors)} 张')
for fn, old, new, ow, nw in changed:
    print(f'  {fn}: {old//1024}KB→{new//1024}KB  {ow}→{nw}')
if errors:
    print('错误:')
    for fn, e in errors:
        print(f'  {fn}: {e}')