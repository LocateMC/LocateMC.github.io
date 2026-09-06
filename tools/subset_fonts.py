# -*- coding: utf-8 -*-
"""
LocateMC 字体子集化一键工具（替代零散手工步骤，供后续新增内容后重复执行）
用法: python subset_fonts.py <项目根> <原版字体目录> <输出目录>
流程: ①collect_chars 扫描站内可见字符 -> ②合并 GB2312 全量(6763 汉字)兜底
      -> ③pyftsubset 生成 Regular/Bold -> ④verify 校验覆盖
依赖: fontTools（pip install fontTools）
"""
import os
import re
import sys
from fontTools.ttLib import TTFont

EXTS = {'.md', '.astro', '.ts', '.json', '.html', '.ini'}
SKIP_DIRS = {'node_modules', 'dist', '.git', '.astro', '.workbuddy', 'backup', '_backup', 'outputs'}


def collect_chars(root):
    """扫描项目源码/内容文件，收集全部可打印字符（ASCII + 非 ASCII）"""
    chars = set()
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in filenames:
            if os.path.splitext(fn)[1].lower() not in EXTS:
                continue
            p = os.path.join(dirpath, fn)
            try:
                with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                    text = f.read()
            except Exception:
                continue
            for ch in text:
                code = ord(ch)
                if code < 32 or ch in '\r\n\t ':
                    continue
                chars.add(ch)
    return chars


def gb2312_chars():
    """GB2312 全量：01-09 符号/字母区 + 16-87 汉字区（6763 字）"""
    chars = set()
    for qu in range(1, 10):
        for w in range(1, 95):
            try:
                chars.add(bytes([qu + 0xA0, w + 0xA0]).decode('gb2312'))
            except Exception:
                pass
    for qu in range(16, 88):
        for w in range(1, 95):
            try:
                chars.add(bytes([qu + 0xA0, w + 0xA0]).decode('gb2312'))
            except Exception:
                pass
    chars.discard('\n')
    chars.discard('\r')
    chars.discard(' ')
    return chars


def font_cmap(font_path):
    font = TTFont(font_path)
    cmap = set()
    for t in font['cmap'].tables:
        if t.isUnicode():
            cmap.update(t.cmap.keys())
    return cmap


def subset_font(src, out, text_file):
    from fontTools import subset
    opts = subset.Options()
    # woff2（Brotli）比 woff（zlib）小约 25%，现代浏览器全支持；
    # 输出扩展名随之改 .woff2（AppLayout @font-face 的 src 与 format 需同步）
    opts.flavor = 'woff2'
    opts.layout_features = ['*']
    opts.notdef_outline = True
    opts.recalc_bounds = True
    font = subset.load_font(src, opts)
    subsetter = subset.Subsetter(options=opts)
    with open(text_file, 'r', encoding='utf-8') as f:
        chars = set(f.read())
    subsetter.populate(text=''.join(sorted(chars)))
    subsetter.subset(font)
    subset.save_font(font, out, opts)
    print(f'生成 {os.path.basename(out)}: {os.path.getsize(out) / 1024:.1f} KB')


def verify(font_path, target_text):
    cmap = font_cmap(font_path)
    missing = sorted(c for c in set(target_text) if ord(c) not in cmap)
    return missing


def main():
    if len(sys.argv) != 4:
        print('用法: python subset_fonts.py <项目根> <原版字体目录> <输出目录>')
        sys.exit(1)
    root, src_dir, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
    os.makedirs(out_dir, exist_ok=True)

    # 1) 站内字符
    collected = collect_chars(root)
    cjk_n = sum(1 for c in collected if '\u4e00' <= c <= '\u9fff')
    print(f'[1/4] 站内收集 {len(collected)} 唯一字符 (汉字 {cjk_n})')

    # 2) 合并 GB2312 兜底，过滤源字体没有的字形
    src_font = os.path.join(src_dir, 'HarmonyOS_Sans_SC_Regular.woff')
    cmap = font_cmap(src_font)
    target = {c for c in (collected | gb2312_chars()) if ord(c) in cmap}
    chars_file = os.path.join(out_dir, 'subset_chars.txt')
    with open(chars_file, 'w', encoding='utf-8') as f:
        f.write(''.join(sorted(target)))
    src_missing = sorted(c for c in (collected | gb2312_chars()) if ord(c) not in cmap)
    print(f'[2/4] 合并 GB2312 后目标 {len(target)} 字符 -> {chars_file}')
    print(f'      源字体本身缺失 {len(src_missing)} 个(将保持 fallback): {"".join(src_missing)[:120]}')

    # 3) 子集化 Regular / Bold（输出 .woff2）
    print('[3/4] 子集化…')
    src_names = ('HarmonyOS_Sans_SC_Regular.woff', 'HarmonyOS_Sans_SC_Bold.woff')
    out_names = tuple(n.replace('.woff', '.woff2') for n in src_names)
    for s_name, o_name in zip(src_names, out_names):
        subset_font(os.path.join(src_dir, s_name), os.path.join(out_dir, o_name), chars_file)

    # 4) 校验
    print('[4/4] 校验…')
    all_ok = True
    for o_name in out_names:
        miss = verify(os.path.join(out_dir, o_name), ''.join(target))
        if miss:
            all_ok = False
            print(f'❌ {o_name} 缺 {len(miss)}: {"".join(miss)[:120]}')
        else:
            print(f'✅ {o_name} 覆盖全部 {len(target)} 目标字符')
    print('完成。' if all_ok else '存在缺失，请检查!')


if __name__ == '__main__':
    main()
