# -*- coding: utf-8 -*-
"""
LocateMC 字体子集化工具 2/2：校验子集字体是否覆盖全部目标字符
用法: python verify_subset.py <字体文件> <字符集txt>
读取 woff 的 cmap，检查字符集 txt 中每个字符是否都在字形表内。
"""
import sys
from fontTools.ttLib import TTFont

def main(font_path, chars_path):
    with open(chars_path, 'r', encoding='utf-8') as f:
        text = f.read()
    chars = set(text)
    font = TTFont(font_path)
    cmap = set()
    for table in font['cmap'].tables:
        if table.isUnicode():
            cmap.update(table.cmap.keys())
    missing = sorted(c for c in chars if ord(c) not in cmap)
    # 空格已在收集时排除，但验证时补上（字体通常含空格，防止误报）
    if ord(' ') not in cmap and ' ' in chars:
        missing.append(' ')
    if missing:
        shown = ''.join(missing)
        print(f'❌ 缺 {len(missing)} 字符: {shown[:200]}')
        return 1
    print(f'✅ 子集覆盖全部 {len(chars)} 个目标字符')
    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1], sys.argv[2]))
