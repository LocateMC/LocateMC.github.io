---
title: "Gate"
description: "Minekube 出品的 Go 语言现代代理端，无需 JVM，约 10MB 内存即可承载大型服务器网络。"
href: "https://gate.minekube.com"
icon: "/icons/gate.webp"
category: "服务端"
subcategory: "代理端"
tags: ["服务端", "代理端", "Java版", "基岩版", "高性能", "Go"]
order: 3
---

Gate 是 Minekube 团队用 Go 语言编写的现代代理端（Proxy），定位为 BungeeCord 与 Velocity 的替代方案。它不依赖 JVM，单个可执行文件即可运行，内存占用约 10MB，尤其适合容器化与云原生部署。

### 特点

- **无需 JVM**：编译为单一二进制文件，启动快、占用低，Linux / macOS / Windows 以及 Docker、Kubernetes 均可部署
- **多版本兼容**：支持 Minecraft 1.8 至最新版本，并持续跟进新版本更新
- **内置基岩互通**：集成 Geyser，可让 Java 版与基岩版玩家进入同一后端服务器
- **Lite 模式**：以超轻量反向代理的形式按域名路由连接，支持 Ping 响应缓存与代理链
- **配置热重载**：监听配置文件变化并即时生效，切换模式或增删服务器都不会踢出在线玩家
- **多语言 SDK**：官方提供 TypeScript、Python、Go、Rust、Kotlin、Java 六套 SDK，可用于编写插件与集成

### 说明

项目以 Apache-2.0 协议开源，代码托管于 https://github.com/minekube/gate ，安装方式（二进制 / Docker / Go / Kubernetes）与完整文档见 https://gate.minekube.com 。
