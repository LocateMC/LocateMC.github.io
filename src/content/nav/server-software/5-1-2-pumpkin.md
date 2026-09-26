---
title: "Pumpkin"
description: "Rust 编写的高性能原版风格服务端，兼容最新 Java 版协议（Bedrock 开发中）。"
href: "https://pumpkinmc.org/"
icon: "/icons/pumpkin.webp"
category: "服务端"
subcategory: "原版核心"
tags: ["服务端","Rust","高性能","多线程","独立实现","开源"]
order: 2
---
Pumpkin 是完全使用 Rust 从零编写的 Minecraft 服务器软件，支持最新 Java 版协议（基岩版支持开发中），以多线程架构与高效内存管理著称，目标是「赋能每个人托管快速高效的 MC 服务器」。

它的取舍相当鲜明：

- **性能与安全并重**：多线程处理区块加载与保存，提供 Vanilla、Linear、Pump 三种模式；
- **不兼容现有插件**：不支持 Bukkit/Paper 插件与 Forge/Fabric 模组，改用自带的 WIT（WebAssembly）插件 API；
- **可配置且迭代快**：以 TOML 配置，可按需禁用功能，目前仍处于重度开发阶段。

官方网站是最直接的入口，想看实现细节则可以翻它的开源仓库。换句话说，它适合愿意接受「插件生态从零开始」、换取更高性能与更强掌控力的服主。
