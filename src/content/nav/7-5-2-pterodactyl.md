---
title: "Pterodactyl"
description: "开源游戏服托管面板，Docker 隔离运行，支持多节点与海量游戏。"
href: "https://pterodactyl.io"
icon: "/icons/pterodactyl.png"
category: "软件程序"
subcategory: "服务器面板"
tags: ["服务器面板","面板","开服","网页管理","Minecraft","开源","Docker","多节点"]
order: 2
---
Pterodactyl 是一款国际知名的开源游戏服务器管理面板（社区常译作「翼龙面板」），采用 PHP（Laravel）+ React + Go（Wings）构建：所有游戏服务器运行在相互隔离的 Docker 容器中，通过美观直观的网页界面即可完成开服、启停、实时监控、文件管理、计划任务与子用户权限等操作。它原生支持 Minecraft（Paper/Spigot/BungeeCord 等）、Rust、泰拉瑞亚、CS:GO 等大量游戏与 Steam 服务端，MIT 许可证完全免费，文档与生态成熟。

### 发展历程
Pterodactyl 由 Dane Everitt 于 2015 年发起，历经多代重构，v1 起确立了 Panel + Wings 的分离架构：Panel（Laravel PHP 网页控制端）负责账号、节点、端口分配、Egg 模板与整套 API；Wings（Go 守护进程）部署在各节点机上，用 Docker 容器实际执行与隔离游戏实例。这种「一个控制端 + 多台节点机」的分布式设计，配合可共享的 Egg 安装脚本生态（社区模板库 eggs.pterodactyl.io），让部署与扩展游戏支持变得高度模板化，项目也因此在 GitHub 上长期保持活跃维护，并衍生出大量第三方主题、扩展与中文汉化社区。

### 社区生态位
Pterodactyl 在生态中扮演着 **“游戏托管平台的操作系统”** 与 **“Docker 化开服的工业标准”** 的角色。与 MCSManager 等上手门槛更低的国产面板相比，它的优势在于**企业级安全与多节点规模化**——容器隔离、细粒度权限与成熟 API 使其成为全球众多游戏主机商（IDC）的商业化托管底座；相应的代价是部署与运维成本较高，需要 Docker、数据库与命令行基础，更适合有技术能力的个人与商家，而非只想一键开服的普通玩家。
