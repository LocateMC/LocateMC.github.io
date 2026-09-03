---
title: 'Nukkit'
description: '一个用 Java 语言从头开始编写的基岩版 (Bedrock Edition) 服务器软件，拥有自己的插件 API。'
href: 'https://cloudburstmc.org/wiki/nukkit'
icon: '/icons/nukkit.png'
category: '开发'
subcategory: '基岩 服务端'
tags: ['基岩版', '开发', '服务器', 'Java', '插件', 'API', 'CloudburstMC']
order: 3
---

Nukkit 是一个完全用 **Java** 语言为 **Minecraft 基岩版 (Bedrock Edition)** 从零开始编写的服务器软件。它最核心的特点是，它**并非**基于官方的基岩版专用服务器 (BDS) 进行修改或注入，而是通过逆向工程，完整地重新实现了一遍 Minecraft 的服务器协议和游戏逻辑。这使得开发者可以使用成熟的 Java 生态系统来为基岩版编写插件。

### 发展历程

Nukkit 是最早出现的第三方基岩版（当时称携带版 PE）服务器软件之一，其历史非常悠久。它的出现，为当时完全封闭的基岩版生态带来了插件化的曙光。后来，随着原项目开发停滞，由 **CloudburstMC** 团队接手并维护其后续版本，这个版本通常被称为 Cloudburst Nukkit 或 NukkitX。由于需要不断地跟进和逆向官方的游戏协议更新，该项目的维护工作极具挑战性，代表了社区在追求开放性方面的卓越技术实力。

### 社区生态位

Nukkit 在 Minecraft 社区中扮演着“**一座连接 Java 生态与基岩世界的独特桥梁**”的角色。它的生态位与所有其他基岩版服务端项目都截然不同：
1.  **为 Java 开发者服务**：它的主要用户和开发者，是那些精通 Java 语言，并希望将其技能应用到基岩版服务器开发的群体。它让数以万计的 Java 开发者可以无缝切换到基岩版的插件开发中。
2.  **Bukkit 精神的体现**：Nukkit 的插件 API 在设计上深受传奇的 Java 版 Bukkit API 的影响，采用了类似的事件驱动模型。这使得有经验的 Bukkit/Spigot 插件开发者会感到非常亲切，极大地降低了他们的学习成本。
3.  **与“注入式”加载器的根本区别**：与 LeviLamina 这类通过注入代码来修改官方 BDS 程序的加载器不同，Nukkit 是一个**完全独立的实现**。这意味着它拥有更高的自由度和潜在的跨平台能力（可以在任何支持 Java 的系统上运行），但也面临着需要自己从头实现所有游戏新特性的巨大挑战。