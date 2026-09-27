---
title: 'MinexStudio'
description: 'MinexStudio 是浏览器端的 Minecraft 数据包 IDE，用 Monaco 与 SpyglassMC 读写 pack，跨版本检查命令与 JSON 兼容性并自动修复，文件不出本机。'
href: 'https://minexind.github.io/'
icon: '/icons/minexstudio.webp'
category: '在线工具' # 用于分类
tags: ['工具', '数据包', 'IDE', '跨版本兼容', 'SpyglassMC', '可视化编辑器', '开源', 'MIT']
subcategory: "命令与数据包"
order: 70
---

MinexStudio 是开发者 MinexInd 做的浏览器端 Minecraft 数据包工作室，站点把自己称作「The Diagnostics Desk」——把过去要装编辑器、配语法插件、再翻版本迁移日志才能干完的活收进一个网页：数据包或资源包拖进去，选好目标版本，检查结果按「分诊后的 issue 列表」逐条列出，改完直接导出。整个解析过程跑在浏览器本地，包内容不上传服务器。

首页把能力拆成三张 case，目前只有第一张是开放状态：

- **Datapack Editor（已开放）**：Monaco 编辑器接入 SpyglassMC，负责 JSON、mcfunction 与 SNBT 的语法校验和补全，配文件树、快速打开与命令面板；`pack.mcmeta`、配方、战利品表、谓词、进度、标签这类结构化内容另有表单界面；`.mcfunction` 还能切到节点编辑器，用连线拼装逻辑后编译成命令，也能把现成函数反编译回图。底部面板分为 Analysis / Fix / Problems / Output 四栏。
- **Resourcepack Studio（未开放）**：面向纹理、模型、音效包的跨版本检查，站点标注 Coming Soon。
- **Registry Explorer（未开放）**：按版本浏览方块、物品与注册表条目，同样标注 Coming Soon。

真正让它区别于 Misode、MC Stacker 这类生成器的是**跨版本兼容检查**：站点自述覆盖 `1.13 → 26.2`，解析器为 SpyglassMC，共 9 条检查通道。它不只查语法错误，还会点出「包的 `pack.mcmeta` 声明版本区间与实际内容对不上」这类容易漏掉的隐患，并对相当一部分问题给出自动修复。这套检查引擎是仓库里独立于前端的 TypeScript 工程，因此同一份能力还以 CLI（`dpcheck`）和本地服务形态存在；仓库另有 `src/mcp-server.ts`，向 AI 代理暴露 `dpcheck_versions`、`dpcheck_check`、`dpcheck_fix_preview`、`dpcheck_fix`、`dpcheck_analyze`、`dpcheck_diagnostics` 六个工具，这在数据包工具里相当少见。

项目以 MIT 协议开源，页面底部留了 GitHub 与 issue 入口。作者 MinexInd 是个人开发者，仓库 2026 年 7 月建立，工具仍在迭代中，界面目前只有英文。
