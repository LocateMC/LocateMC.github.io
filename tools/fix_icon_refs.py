# -*- coding: utf-8 -*-
"""
LocateMC 图标引用修复：把代码/内容里 /icons/xxx.png|jpg|jpeg|ico 引用改为 .webp
用法: python fix_icon_refs.py <项目根>
  - 扫描 src/**（.md/.astro/.ts/.json）中形如 /icons/<name>.<旧扩展名> 的引用
  - 仅当 public/icons 下存在同名 .webp 时才替换，否则记录警告（防 404）
"""
import os
import re
import sys

PAT = re.compile(r"(/icons/[\w\u4e00-\u9fa5.\-%]+?)\.(?:png|jpeg|jpg|ico)")

def main():
    if len(sys.argv) < 2:
        print('用法: python fix_icon_refs.py <项目根>')
        sys.exit(1)
    root = sys.argv[1]
    icons_dir = os.path.join(root, 'public', 'icons')
    webp_names = {f[:-5] for f in os.listdir(icons_dir) if f.endswith('.webp')}

    changed = 0
    warns = []

    def fix_line(line):
        nonlocal changed
        def repl(m):
            nonlocal changed
            base = m.group(1)  # 形如 /icons/name
            name = os.path.basename(base)
            if name in webp_names:
                changed += 1
                return base + '.webp'
            warns.append(base)
            return m.group(0)
        return PAT.sub(repl, line)

    src_dir = os.path.join(root, 'src')
    for dirpath, dirnames, filenames in os.walk(src_dir):
        dirnames[:] = [d for d in dirnames if d not in ('node_modules', '.astro', '.workbuddy')]
        for fn in filenames:
            if os.path.splitext(fn)[1].lower() not in ('.md', '.astro', '.ts', '.json'):
                continue
            p = os.path.join(dirpath, fn)
            try:
                with open(p, 'r', encoding='utf-8') as f:
                    text = f.read()
            except Exception:
                continue
            if not PAT.search(text):
                continue
            new_text = '\n'.join(fix_line(line) for line in text.split('\n'))
            if new_text != text:
                with open(p, 'w', encoding='utf-8') as f:
                    f.write(new_text)
                print(f'  改: {os.path.relpath(p, root)}')

    print(f'\n替换引用 {changed} 处')
    if warns:
        print(f'⚠ 以下 {len(warns)} 个引用无对应 .webp（保持原样，请检查是否孤儿/漏转换）:')
        for w in sorted(set(warns)):
            print('  ', w)
    else:
        print('✅ 全部引用均有对应 .webp')

if __name__ == '__main__':
    main()
