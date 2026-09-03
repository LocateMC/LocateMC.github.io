# -*- coding: utf-8 -*-
"""
LocateMC 字体子集化工具 1/2：收集站点全部可见字符
用法: python collect_chars.py <项目根> <输出txt>
扫描范围: src/content/nav/*.md、src/data/*.json、src/**/*.astro|ts、public/*.html
"""
import os
import re
import sys

EXTS = {'.md', '.astro', '.ts', '.json', '.html', '.ini'}

def walk(root):
    for dirpath, dirnames, filenames in os.walk(root):
        # 跳过 node_modules / dist / .git / .astro / backup
        dirnames[:] = [d for d in dirnames if d not in
                       ('node_modules', 'dist', '.git', '.astro', '.workbuddy', 'backup', '_backup', 'outputs')]
        for fn in filenames:
            if os.path.splitext(fn)[1].lower() in EXTS:
                yield os.path.join(dirpath, fn)

def collect_chars(root):
    chars = set()
    files = []
    for p in walk(root):
        # 只收源码与内容目录；src/lib、components、layouts、pages 都收
        if 'node_modules' in p or 'dist' in p:
            continue
        files.append(p)
    for p in files:
        try:
            with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                text = f.read()
        except Exception:
            continue
        for ch in text:
            code = ord(ch)
            # 排除控制字符与空白；保留可打印 ASCII 与所有非 ASCII
            if code < 32:
                continue
            if ch in '\r\n\t ':
                continue
            chars.add(ch)
    return sorted(chars)

if __name__ == '__main__':
    root = sys.argv[1]
    out = sys.argv[2]
    chars = collect_chars(root)
    with open(out, 'w', encoding='utf-8') as f:
        f.write(''.join(chars))
    print(f'收集 {len(chars)} 个唯一字符 -> {out}')
    # 打印 CJK 统计
    cjk = sum(1 for c in chars if '\u4e00' <= c <= '\u9fff')
    print(f'其中汉字: {cjk} 个')
