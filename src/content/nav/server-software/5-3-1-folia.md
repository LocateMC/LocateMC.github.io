---
title: "Folia"
description: "PaperMC 团队推出的多线程服务端核心，把世界划分成多个独立区域并行调度，突破单线程 tick 限制，显著利用多核 CPU 承载更大规模服务器。"
href: "https://papermc.io/software/folia"
icon: "/icons/folia.webp"
category: "服务端"
subcategory: "Folia系"
tags: ["服务端", "Java版", "多线程", "PaperMC", "开源"]
order: 1
---
Folia 是 PaperMC 团队推出的多线程服务端核心，把世界划分成多个相互独立的区域并行调度，突破了传统单线程 tick 的限制，能显著利用多核 CPU 来承载更大规模的服务器。

它带来的变化很直接：不同区域的区块与实体各自并行 tick，因此特别适合大型生存服和高性能需求场景；但代价同样明确——使用 Bukkit 全局 API 的插件无法直接运行，必须适配 Folia 的线程模型。

换句话说，迁到 Folia 之前，先确认自己的插件组合是否有替代或适配版本。下载与文档都在 PaperMC 官方网站，建议在正式上线前先做一轮兼容性验证。
