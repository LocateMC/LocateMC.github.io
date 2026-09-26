---
title: "Lophine"
description: "基于 Folia 的分支服务端，专注在 Folia 上补齐更多生电内容与可配置优化。"
href: "https://github.com/LophineLabs/Lophine"
icon: "/icons/lophine.webp"
category: "服务端"
subcategory: "Folia系"
tags: ["服务端", "Java版", "Folia分支", "生电", "开源"]
order: 2
---
Lophine 是基于 Folia 的服务端分支，核心目标是在 Folia 上补齐更多生电（红石/技术）内容与实用功能，同时修复 Folia 的已知问题，并提供大量可配置的原版特性开关。有一点需要提前说明：如果追求完整的生电表现，它仍不是最优解，官方仍然推荐走 Fabric。

它的增强主要集中在以下几处：

- **生电增强与 Bug 修复**：在 Folia 上补齐更多生电玩法与相关优化，并针对 Folia 的已知问题做专项修复；
- **可配置原版特性**：把原版游戏机制做成开关，服主可以按需自由取舍；
- **多存档格式**：除 linear 外还支持 b_linear（linear 的重新实现），并附带实时显示服务器 TPS 的 TPS Bar；
- **Mixin 支持**：可通过启动参数 `morninggloryclip.enable.mixin` 启用服务端 mixin。

下载途径有两条：面向中国大陆的 CNB 镜像与面向全球的 GitHub Releases，国内网络环境下前者通常更顺畅。发布文件与源码仓库均保持公开，方便自行核对版本；考虑到它仍基于 Folia 的多线程模型，正式迁移前建议先确认插件兼容情况。