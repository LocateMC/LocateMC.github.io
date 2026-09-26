---
title: "Minestom"
description: "开源的 Minecraft 服务器开发库，不含 Mojang 代码，默认不带生物 AI、合成、红石等游戏逻辑，开发者用现代 API 自行实现功能，适合小游戏与空岛。"
href: "https://wiki.minestom.net/"
icon: "/icons/minestom.webp"
category: "服务端"
subcategory: "原版核心"
tags: ["服务端","Java版","框架","开发库","从零实现","开源"]
order: 4
---
Minestom 是一个开源的 Minecraft 服务器开发库（Library），不含任何 Mojang 代码，也默认不带生物 AI、合成、红石等游戏逻辑——开发者通过完整的现代 API 自行实现所需功能，常被用来打造小游戏、空岛这类高度定制的服务器。

它更像一套工具而非成品：

- **从零构建**：不是即用型服务端，需要集成进 Java 项目后按需开发；
- **Instance 体系**：以轻量的区块/实体集合模型组织世界，可随时创建、复制与传送；
- **性能取向明确**：多线程设计，但不兼容 Bukkit/Forge/Sponge 插件，更适合技术型开发团队。

官方文档与源码仓库都在线上公开。上手前建议先确认团队能否接受「一切自己写」的前提——它的自由度最高，代价是几乎所有游戏逻辑都要由你来补。
