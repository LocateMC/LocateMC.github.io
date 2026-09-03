---
title: "Axolotl Launcher"
description: "开源无广告的跨平台启动器，Modrinth 与 CurseForge 双源合一。"
href: "https://axlmc.org/"
icon: 'https://cdn.jsdelivr.net/gh/LocateMC/LocateMC.github.io@main/public/icons/axolotl-launcher.png'
category: "软件程序"
subcategory: "启动器"
tags: ["启动器","开源","跨平台","Modrinth","CurseForge","中文"]
order: 6
---
Axolotl Launcher（美西螈启动器）是一款免费、开源、无广告的跨平台 Minecraft Java 版启动器，采用 Tauri v2 + Rust + Vue 3 构建。它同时接入 Modrinth 与 CurseForge 两大内容源，让用户在一个界面内完成模组、整合包、资源包与光影的检索、版本选择、依赖解析与更新维护，并将渐变文字生成器、种子地图、3D 原理图工作台等常用工具以“Axolotl 实验室”的形式内置其中。

### 发展历程
Axolotl 脱胎于 Modrinth 的开源单体仓库（monorepo），是以 GPL-3.0 协议发布的独立下游项目——它与同名的 “Axolotl Client” 并无关联。它的出现源于一个长期存在的现实困境：Modrinth 生态开放、体验现代，却覆盖不到大量仅发布于 CurseForge 的经典模组；而 CurseForge 内容庞大，其官方客户端又缺少开源与跨平台的选择。Axolotl 选择以“一个启动器，两个内容源”破局，用 Rust 与 Tauri 的轻量内核替代笨重的传统架构，在保持界面响应与低资源占用的同时，把依赖解析、批量实例管理与配置迁移一并纳入主流程，并逐步扩展出支持 Microsoft、本地离线与 Yggdrasil 认证的完整账号体系。

### 社区生态位
Axolotl 在生态中扮演着 **“两大内容源之间的桥梁”** 与 **“现代轻量启动器的新锐代表”** 的角色。如果说 HMCL 以开源底蕴与可定制深度赢得技术流玩家、BakaXL 以视觉美学树立“颜值标杆”，那么 Axolotl 的立身之本则是“不折腾”——它让玩家无需再为了一个模组在两个平台、两个客户端之间来回切换。它尤其契合三类用户：同时使用 Modrinth 与 CurseForge 的整合包玩家、在非 Windows 平台上寻求现代体验的 macOS 与 Linux 用户，以及看重开源、无广告与轻量内核的效率派。内置实验室进一步把原本需要打开网页才能完成的操作收拢进启动器，使其从单纯的“启动工具”延伸为内容管理的中枢。
