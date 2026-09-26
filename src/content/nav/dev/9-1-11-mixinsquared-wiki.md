---
title: 'MixinSquared Wiki'
description: 'MixinSquared 是 Bawnorton 创建的高级 Mixin 扩展库官方维基，突破一个类只能被单一 Mixin 配置修改的限制，支持多配置同应用于一类。'
href: 'https://github.com/Bawnorton/MixinSquared/wiki'
icon: '/icons/sample.webp'
category: '开发'
subcategory: 'Java 模组'
tags: ['Java', '开发', 'Mixin', '扩展库', 'API', '高级工具']
order: 11
---

MixinSquared 是一个由社区开发者 Bawnorton 创建的、高度专业化的 Mixin 扩展库。它的核心功能是打破原生 Mixin「一个类只能被一个 Mixin 配置（Configuration）中的 Mixin 所修改」的限制，允许开发者将多个、独立的 Mixin 配置应用到同一个目标类上。

该项目的诞生，源于极其复杂的模组开发场景下开发者遇到的一个棘手问题：当一个模组需要根据加载的其他模组，来动态地应用不同的 Mixin 修改时，或者在开发复杂的兼容层、需要将多个「虚拟」模组的 Mixin 应用到同一个游戏类时，原生 Mixin 的限制就成了一个难以逾越的障碍。MixinSquared 通过提供一种「注入 Mixin 到 Mixin」的巧妙机制，为这类极端情况提供了解决方案。

它的用户群体非常小，但解决的问题却至关重要，因此在社区里常被称作解决复杂 Mixin 冲突的终极武器、模块化注入的实现者。

- **服务于框架和兼容层开发者**：这并非一个普通模组开发者会用到的工具，它的主要用户是那些正在开发大型 API、兼容层（如 Sinytra Connector 可能就会用到类似技术）或高度模块化系统的开发者。
- **解锁高级架构的可能性**：它使更复杂的、动态的模组化架构成为可能——开发者可以将功能分解到不同的 Mixin 配置中，然后按需组合，而不是把所有代码都塞进一个庞大而单一的配置里。
- **技术探索的产物**：它是对 Mixin 框架底层原理进行深度探索和「魔改」的产物，代表了社区在挑战和突破核心工具限制方面的智慧和创造力。

如果只是写普通模组，几乎不会用到它；一旦要设计兼容层，它往往就是唯一可行的口子。
