# -*- coding: utf-8 -*-
"""
逆迁移：把 md 卡片的 icon 字段从 jsDelivr CDN URL 改回站点相对路径
'https://cdn.jsdelivr.net/gh/LocateMC/LocateMC.github.io@main/public/icons/x.png'
-> '/icons/x.png'
原因：jsDelivr 国内访问不可靠（实证：图片无法加载）；相对路径对 github.io
与未来 CF 自定义域名均正确。与 migrate_icon_url.py 互为逆操作。
"""
import os
import re
import sys

JS_RE = re.compile(
    r"(icon:\s*['\"])https://cdn\.jsdelivr\.net/gh/LocateMC/LocateMC\.github\.io@main/public/icons/([^'\"]+)(['\"])",
    re.MULTILINE,
)

def revert(path):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    new_text, n = JS_RE.subn(rf"\1/icons/\2\3", text)
    if n:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_text)
    return n

if __name__ == '__main__':
    nav_dir = sys.argv[1]
    total = 0
    changed = 0
    for fn in sorted(os.listdir(nav_dir)):
        p = os.path.join(nav_dir, fn)
        if not fn.endswith('.md'):
            continue
        n = revert(p)
        if n:
            changed += 1
            total += n
    print(f'回退 {changed} 张卡片 ({total} 处 icon 字段)')