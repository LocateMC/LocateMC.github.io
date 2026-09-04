---
title: "Folia"
description: "PaperMC 团队出品的多线程服务端，按区域并行调度彻底释放多核性能。"
href: "https://papermc.io/software/folia"
icon: "/icons/folia.png"
category: "服务端"
subcategory: "Folia系"
tags: ["服务端", "Java版", "多线程", "PaperMC", "开源"]
order: 1
---
Folia 是 PaperMC 团队推出的革命性多线程服务端核心，将世界划分为多个独立区域并行调度，突破传统单线程 tick 的限制，可显著利用多核 CPU 承载更大规模服务器。

### 特点

- **区域化并行**：不同区域（Region）的区块与实体并行 tick
- **大规模承载**：面向大型生存服与高性能需求场景
- **插件兼容限制**：不支持使用 Bukkit 全局 API 的插件，需适配 Folia 线程模型

下载与文档：https://papermc.io/software/folia
