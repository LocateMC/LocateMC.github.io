---
title: 'Minecraft SAPI 文档'
description: 'SAPI 是社区维护的 Minecraft 基岩版脚本 API 中文文档，把官方类型声明按模块整理成可检索的 API 参考，并逐条提供中文翻译。'
href: 'https://projectxero.top/sapi/'
icon: '/icons/sapi.webp'
category: '开发'
subcategory: '基岩'
tags: ['基岩版', '开发', '文档', 'API', '中文翻译', '类型定义']
order: 6
---
SAPI 是把 Minecraft 基岩版官方的 TypeScript 类型声明文件（`.d.ts`）用 TypeDoc 生成、并逐步翻译成简体中文的 API 参考站点，由 XeroAlpha 维护，内容跟随游戏版本更新，当前对应到 1.26.60 版本线。

站内按官方模块划分，共 12 个入口：运行时核心 `@minecraft/server`（体量最大，收录七百余项成员，Player、Dimension、ItemStack 等都在这里）、`server-ui`、`server-admin`、`server-editor`、`server-net`、`server-gametest`、`server-graphics`，以及 `@minecraft/math`、`@minecraft/common`、`debug-utilities`、`diagnostics` 和 `vanilla-data`。每个模块下再按枚举、类、接口、类型别名、变量与函数分类陈列，逐项给出签名、参数、返回值与抛错条件，查某个成员能不能用、参数怎么传，翻一页就有答案。

它和普通翻译站的做法不太一样：中文页与原文对照页分开成两套（`/sapi/` 与 `/sapi/original/`），正文里也保留英文原文，等于中文解释和官方定义并排摆在眼前；翻译工作放在 GitHub 仓库 `XeroAlpha/sapi-typedoc` 上协作，以翻译片段为单位提交，构建脚本再自动生成对应产物。页面给每一项都标了翻译状态——未翻译、翻译中、待检查、已完成，整体仍在推进过程中。

对写基岩版脚本的开发者来说，它的用处集中在两件事上：一是原生中文的 API 检索，二是省掉在英文文档与类型声明之间来回对照的功夫。想要一份带中文解释、又能逐条和官方类型定义对上的 API 手册，从这里入手最省事。
