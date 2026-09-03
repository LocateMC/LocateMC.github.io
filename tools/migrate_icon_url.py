# -*- coding: utf-8 -*-
"""
批量把 md 卡片的 icon 字段 / carousel.json 的 image 字段 从相对路径
'/icons/x.png' 切到 jsDelivr CDN URL（实验阶段指线上仓库 main 分支）。
"""
import os
import re
import sys

JS_PREFIX = 'https://cdn.jsdelivr.net/gh/LocateMC/LocateMC.github.io@main/public'

ICON_RE = re.compile(r"^(icon:\s*)['\"]/?icons/([^'\"]+)['\"](.*)$", re.MULTILINE)
CAROUSEL_IMG_RE = re.compile(r'"image":\s*"[^"]*"')

def migrate_md(path):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    new_text, n = ICON_RE.subn(
        rf"\1'{JS_PREFIX}/icons/\2'\3",
        text
    )
    if n:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_text)
    return n

def migrate_carousel(path):
    if not os.path.exists(path):
        return 0
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    # 仅 image 模式（"mode": "image"）才动 image 字段；card 模式 image 字段不存在
    n = 0
    def sub(m):
        nonlocal n
        old = m.group(0)
        if '/banners/' not in old:
            return old
        n += 1
        # 从 "/banners/x.png" -> jsDelivr
        inner = old.split(':', 1)[1].strip().strip('"')
        return f'"image": "{JS_PREFIX}/banners/{inner.lstrip("/").replace("banners/","")}"'
    new_text = CAROUSEL_IMG_RE.sub(sub, text)
    if n:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_text)
    return n

if __name__ == '__main__':
    nav_dir = sys.argv[1]
    carousel_path = sys.argv[2]
    total = 0
    changed_files = 0
    for fn in sorted(os.listdir(nav_dir)):
        p = os.path.join(nav_dir, fn)
        if not fn.endswith('.md'):
            continue
        n = migrate_md(p)
        if n:
            changed_files += 1
            total += n
    cn = migrate_carousel(carousel_path)
    print(f'修改 {changed_files} 张卡片 ({total} 处 icon 字段)；carousel image 字段 {cn} 处')