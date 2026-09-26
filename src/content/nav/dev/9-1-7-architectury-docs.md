---
title: 'Architectury 文档'
description: '一个旨在统一 Forge 和 Fabric 两大模组平台的 API，让开发者可以轻松地进行跨平台模组开发的官方文档。'
href: 'https://docs.architectury.dev/'
icon: '/icons/architectury-docs.webp'
category: '开发'
subcategory: 'Java 模组'
tags: ['开发', 'API', 'Architectury', 'Forge', 'Fabric', '跨平台']
order: 7
---

Architectury API Documentation 是 Architectury API 这个项目的官方技术文档。Architectury 是一个极其重要的中间件 API，其核心目标是抽象化 Forge 和 Fabric 这两大模组平台之间的差异：它允许模组开发者编写一套核心代码，然后只需进行少量调整，即可将模组同时编译并发布到两个平台上。这份文档则指导开发者如何正确使用该 API 来实现这一目标。

Architectury 的诞生，是为了解决 Minecraft 模组开发中一个最大的痛点——社区的分裂。由于 Forge 和 Fabric 的 API 和底层机制不兼容，开发者往往需要为两个平台分别维护一套几乎完全不同的代码库，这极大地增加了工作量；Architectury 通过提供一套统一的、更高层次的 API，将两个平台的底层实现细节封装起来，为这个问题提供了目前最优的解决方案，这份文档也随之成为所有希望进行跨平台开发的开发者的「必读手册」。

它常被形容为「Forge 与 Fabric 之间的瑞士」和模组开发的通用语，三点最能说明它的分量。

- **统一战线的缔造者**：它是连接两大分裂生态最重要的桥梁，让开发者可以「一次编写，到处运行」，极大地节省了开发和维护成本，也让越来越多的模组能够同时惠及两大平台的玩家。
- **抽象层与适配器**：从技术上讲，它是一个完美的「适配器模式」应用——对外提供稳定、统一的接口，在底层默默地把这些调用「翻译」成 Forge 或 Fabric 各自能够理解的语言。
- **开发者的福音**：学习和使用 Architectury 已经成为现代模组开发中一项高性价比的投资，这份文档就是这项投资的入门指南和参考手册，也是推动社区走向整合的重要基础设施。
