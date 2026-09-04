---
title: "Geyser"
description: "GeyserMC 核心桥接，让基岩版玩家加入 Java 版服务器。"
href: "https://geysermc.org/"
icon: "/icons/geyser.png"
category: "服务端"
subcategory: "互通"
tags: ["服务端", "互通", "基岩版", "Java版", "桥接", "开源"]
order: 1
---

Geyser 是 GeyserMC 团队开发的开源桥接插件/独立代理，让 **基岩版玩家**无需 Java 正版账号即可加入 **Java 版服务器**。它把基岩玩家的协议流量实时转译为 Java 服务端可识别的数据包，反之亦然，让跨平台联机成为开箱即用的能力。

### 形式

- **Spigot/Paper 等 Java 服务端插件**：安装后 Java 服自动支持基岩玩家直连
- **独立代理模式（Standalone）**：也可作为前置代理运行，转发到任意后端 Java 服务端
- **配套 Floodgate**：组合使用可彻底免去 Java 正版验证（见 Floodgate 卡片）

### 发展历程

- 2020 年由 kumouri-aya、Kas-tle 等发起，初版仅支持基础玩法
- 2021 年大规模重构协议层，支持 1.17 洞穴与山崖更新；引入独立代理模式
- 2022–2023 年持续跟进 1.19/1.20 内容，已成基岩进 Java 服的事实标准方案
- 2024 年起联合 PaperMC、Fabric 等多家生态共建，与 Floodgate 共同构成完整跨端方案
- 至今由 GeyserMC 社区维护，活跃迭代；支持 Paper、Fabric、NeoForge、Velocity 等十余种下游

### 社区生态位

Geyser 占据 **"跨端互通的事实标准"** 位置——绝大多数中小型 Java 服务器要让基岩玩家加入，第一选择就是装这个插件。它的存在让 **"Java 版独占的精品玩法"**"与"基岩玩家的便携设备"得以兼容，配合 Floodgate 后甚至能完全跳过 Java 正版门槛。

下载与文档：https://geysermc.org/