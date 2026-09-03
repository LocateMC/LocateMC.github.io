---
title: 'Architectury 文档'
description: '一个旨在统一 Forge 和 Fabric 两大模组平台的 API，让开发者可以轻松地进行跨平台模组开发的官方文档。'
href: 'https://docs.architectury.dev/'
icon: '/icons/architectury-docs.png'
category: '开发'
subcategory: 'Java 模组'
tags: ['开发', 'API', 'Architectury', 'Forge', 'Fabric', '跨平台']
order: 7
---

Architectury API Documentation 是 **Architectury API** 这个项目的官方技术文档。Architectury 是一个极其重要的中间件 API，其核心目标是**抽象化 Forge 和 Fabric 这两大模组平台之间的差异**。它允许模组开发者编写一套核心代码，然后只需进行少量调整，即可将他们的模组同时编译并发布到 Forge 和 Fabric 两个平台上。这份文档则是指导开发者如何正确使用 این API 来实现这一目标。

### 发展历程

Architectury 的诞生是为了解决 Minecraft 模组开发中一个最大的痛点：社区的分裂。由于 Forge 和 Fabric 的 API 和底层机制不兼容，开发者往往需要为两个平台分别维护一套几乎完全不同的代码库，这极大地增加了工作量。Architectury 通过提供一套统一的、更高层次的 API，将两个平台的底层实现细节封装起来，为这个问题提供了目前最优的解决方案。这份文档也随之成为所有希望进行跨平台开发的开发者的“必读手册”。

### 社区生态位

Architectury API 在 Minecraft 社区中扮演着“**Forge 与 Fabric 之间的瑞士**”和“**模组开发的通用语**”这一至关重要的角色。
1.  **统一战线的缔造者**：它是连接两大分裂的模组生态系统最重要的桥梁。它让开发者可以“一次编写，到处运行”，极大地节省了开发和维护成本，使得越来越多的模组能够同时惠及两大平台的玩家。
2.  **抽象层与适配器**：从技术上讲，它是一个完美的“适配器模式”应用。它为开发者提供了一套稳定、统一的接口，然后在底层默默地将这些调用“翻译”成 Forge 或 Fabric 各自能够理解的语言。
3.  **开发者的福音**：对于模组开发者而言，学习和使用 Architectury 已经成为进行现代模组开发的一项高性价比投资。这份文档则是这项投资的“入门指南”和“参考手册”，是推动社区走向整合和统一的重要基础设施。