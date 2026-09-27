---
title: 'SAPI 文档与更新日志'
description: 'SAPI 中文文档的增强部署：除 12 个 @minecraft 模块的 API 参考，还附稳定版与预览版更新日志、MCP 检索与 Markdown 导出。'
href: 'https://sapi.dogelake.cn/'
icon: '/icons/sapi-dogelake.webp'
category: '开发'
subcategory: '基岩'
tags: ['基岩版', '开发', '文档', 'API', '更新日志', 'MCP']
order: 7
---
这是 Minecraft Script API 中文文档的另一个部署，由 Tanya7z 维护，站点代码 fork 自 XeroAlpha 的 `sapi-typedoc`。基础部分与上游同源：同样覆盖 12 个 `@minecraft/*` 模块，从 `common`、`math` 一直到体量最大的 `server`，按类、枚举、接口、函数、变量分类陈列，说明文字中英对照（先中文后英文）。区别在于它在文档之外补了不少上游没有的东西。

最实用的是**更新日志**：顶栏单独一个入口，把每个 npm 包的稳定版（latest）与预览版（rc / preview / beta）更新记录完整列出，正文取自微软官方仓库 `MicrosoftDocs/minecraft-creator`，遇到 npm 上尚未收录的预览版本还会回退到官方 changelog 中同轨道的最近条目。想确认某个 API 是哪一版加的、最近一次改动改了什么，不必再翻英文仓库。

面向 AI 工具链这一侧也做得更细：站点提供远程 MCP 端点，把一句安装说明丢给支持 MCP 的编辑器，AI 就能直接检索文档、查询结构化 API，甚至初始化 JS / TS 脚本工程；另配有 `llms.txt`、全文打包的 `llms-full.txt`、`api-index.json` 与版本映射数据。任意文档页只要在 URL 后加 `.md` 就能导出单页 Markdown，正文里也备了「复制 Markdown」按钮，把 API 说明喂给 AI 或贴进笔记都方便。页面底部还给出「同领域相关」的交叉链接，顺着一条 API 能摸到同一模块里相关的类与枚举。

许可方面，站点原创的编排结构、中文译文与工程代码采用 MIT；页脚皮肤贴图来自 Minecraft Wiki，遵循 CC BY-NC-SA 3.0。使用时按站上的 AI 使用说明保留来源链接即可。
