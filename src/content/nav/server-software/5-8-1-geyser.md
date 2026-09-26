---
title: "Geyser"
description: "GeyserMC 核心桥接，让基岩版玩家加入 Java 版服务器。"
href: "https://geysermc.org/"
icon: "/icons/geyser.webp"
category: "服务端"
subcategory: "互通"
tags: ["服务端", "互通", "基岩版", "Java版", "桥接", "开源"]
order: 1
---
Geyser 是 GeyserMC 团队开发的开源桥接插件与独立代理，让基岩版玩家无需 Java 正版账号即可加入 Java 版服务器。它把基岩玩家的协议流量实时转译为 Java 服务端可识别的数据包，反向亦然，让跨平台联机成为开箱即用的能力。

### 三种使用形态

- **Java 服务端插件**：以 Spigot/Paper 等核心的插件形式安装，装好后 Java 服自动支持基岩玩家直连；
- **独立代理模式（Standalone）**：也可以作为前置代理运行，把连接转发到任意后端 Java 服务端；
- **配套 Floodgate**：与 Floodgate 组合使用时，可彻底免去 Java 正版验证（详见 Floodgate 卡片）。

它也经历过一段不短的演进：2020 年由 kumouri-aya、Kas-tle 等人发起，初版仅支持基础玩法；2021 年对协议层做了大规模重构，支持 1.17 洞穴与山崖更新，并引入独立代理模式；2022 至 2023 年持续跟进 1.19/1.20 内容，逐渐成为「基岩进 Java 服」的事实标准方案；2024 年起联合 PaperMC、Fabric 等多家生态共同建设，与 Floodgate 一起构成完整的跨端方案；至今仍由 GeyserMC 社区维护、活跃迭代，已支持 Paper、Fabric、NeoForge、Velocity 等十余种下游。

在生态里，它占据的是「跨端互通的事实标准」位置——绝大多数中小型 Java 服务器想让基岩玩家加入，第一选择就是装上这个插件。它让 Java 版独有的精品玩法与基岩版玩家的便携设备得以互通，配合 Floodgate 后甚至能完全跳过 Java 正版门槛。

如果你正在运营 Java 版服务器，希望把手机、主机上的玩家也接进来，Geyser 基本是必装的第一块拼图；下载与文档都可以从 GeyserMC 官方网站获取。