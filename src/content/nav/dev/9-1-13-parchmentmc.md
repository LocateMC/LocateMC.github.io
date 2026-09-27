---
title: 'ParchmentMC'
description: 'ParchmentMC 是社区共建的 Minecraft Java 版参数名与 javadoc 映射集，补足 Mojang 官方映射里满屏混淆名的空缺，兼容 Mojmap 且通用于各模组加载器。'
href: 'https://parchmentmc.org/'
icon: '/icons/parchmentmc.webp'
category: '开发'
subcategory: 'Java 模组'
tags: ['映射', '参数名', 'javadoc', 'Java 版', '模组开发', 'Mojmap', '社区共建', 'CC0']
order: 13
---

用 Forge、Fabric 或 NeoForge 写模组时，反编译出来的方法参数常常是一串 `p_12345_` 这样的混淆名，读代码基本靠猜。ParchmentMC 就是补这块的：它是一套**社区共建、与模组加载器无关**的映射集，只做参数名与 javadoc 这部分增量，叠加在 Mojang 官方发布的名称（Mojmap）之上。

几个特点：

- **完全兼容 Mojmap**：它是官方映射的补充而不是替代，两类映射之间来回切换不会有结构性冲突；
- **平台中立**：同一套映射可用于 Forge、Fabric、Quilt 等，换加载器不必换数据源；
- **数据开源**：映射数据仓库以 CC0 协议公开，任何人都能提交参数名与注释的修正，站点也专门写了 Mapping Standards 与 Review Process 说明这套协作规则。

站点本身更像一份规范文档：Getting Started 讲怎么把它接进自己的 workspace，Documentation 是使用说明，Maven Repository and Artifacts 交代坐标与产物形态，另有版本政策（Version Policy）与 FAQ。映射不走常规的版本发布，而是发布到 Maven 仓库，并区分 release、nightly、bleeding 三条通道，分别对应稳定、每日构建与开发中的映射。

它和 Mixin、Architectury 这些文档站不太一样：那些站教你「怎么写」，ParchmentMC 解决的是「读得懂」。对需要长期维护模组、或者得去读别人源码的人来说，通常第一件事就是先把 Parchment 接进开发环境。
