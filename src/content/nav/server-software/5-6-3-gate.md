---
title: "Gate"
description: "Minekube 团队用 Go 编写的现代代理端，不依赖 JVM，单文件即可运行，内存约 10MB，支持 1.8 至最新版本，尤其适合容器化与云原生部署。"
href: "https://gate.minekube.com"
icon: "/icons/gate.webp"
category: "服务端"
subcategory: "代理端"
tags: ["服务端", "代理端", "Java版", "基岩版", "高性能", "Go"]
order: 3
---
Gate 是 Minekube 团队用 Go 语言编写的现代代理端（Proxy），定位为 BungeeCord 与 Velocity 的替代方案。它不依赖 JVM，单个可执行文件即可运行，内存占用约 10MB，支持 Minecraft 1.8 至最新版本并持续跟进更新，尤其适合容器化与云原生部署。

几个比较突出的能力：

- **无需 JVM**：编译为单一二进制文件，启动快、占用低，Linux / macOS / Windows 以及 Docker、Kubernetes 均可部署；
- **内置基岩互通**：集成 Geyser，可让 Java 版与基岩版玩家进入同一后端服务器；
- **Lite 模式**：以超轻量反向代理的形式按域名路由连接，支持 Ping 响应缓存与代理链；
- **配置热重载**：监听配置文件变化并即时生效，切换模式或增删服务器都不会踢出在线玩家；
- **多语言 SDK**：官方提供 TypeScript、Python、Go、Rust、Kotlin、Java 六套 SDK，可用于编写插件与集成。

项目以 Apache-2.0 协议开源，代码托管在 GitHub 上，二进制、Docker、Go、Kubernetes 等多种安装方式与完整文档都可在官方网站查到。如果服务器网络跑在容器里，或者想彻底摆脱 JVM 带来的资源开销，Gate 是目前最对症的代理端之一。
