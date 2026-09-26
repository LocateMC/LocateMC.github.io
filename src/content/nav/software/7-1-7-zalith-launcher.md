---
title: 'Zalith Launcher'
description: 'Zalith Launcher 是 Android 端稳定高效无广告的 Minecraft Java 版启动器，基于 PojavLauncher 开发，提供多源加速下载。'
href: 'https://zalithlauncher.cn/'
icon: '/icons/zalith-launcher.webp'
category: '软件程序' # 用于分类
subcategory: "启动器"
tags: ['启动器', 'Android', 'Java 版', '开源', 'GPL-3.0', 'PojavLauncher', '手机']
order: 7
---

Zalith Launcher 是专为 **Android** 设备开发的 Minecraft: Java Edition 启动器，目标是「**在 Android 上重新定义 Java 版体验**」——官方自述只有三个词：稳定高效、没有广告。它基于 **PojavLauncher** 开发，把「在手机上跑 Java 版」这件本来颇折腾的事，做成了一套界面干净、开箱可用的方案。

常用环节几乎都收进了同一套界面：

- **一站式资源下载**：直接在启动器内下载游戏核心、模组、整合包与资源包，并针对国内网络做了**多源加速**，不必再满世界找资源站。
- **版本与渲染器**：支持版本隔离与自定义安装路径，原版、Fabric、Forge 各自独立、互不干扰；同时提供多种渲染器方案且参数可调，可按设备性能在画质与帧数之间取平衡——Android 侧性能差异极大，这一点相当关键。
- **多人联机**：可直接连接服务器，和朋友一起进游戏。
- **自定义设置与界面**：游戏参数、按键布局、语言、主题都能改，贴合手机触屏的操作习惯，界面层级也不绕。

项目以开源形式维护在 GitHub 组织 **ZalithLauncher** 下，并完成过一次彻底的重写。初代 **ZalithLauncher（ZL1）** 用 C 语言编写，以 GPL-3.0 授权，累计约 1.7k stars，因「维护难度较大」已**归档**，仓库内直接指路新项目；接棒的 **ZalithLauncher2（ZL2）** 改用 **Kotlin**，同样 **GPL-3.0**，累计约 1.8k stars，仍在持续迭代。周边还有 **Zalith-Info**（启动器的信息源，推送通知与赞助名单）、**ZalithWebsite** 与 **zalithdocs**（官网与文档站，MIT）。

ZL2 的设计并不封闭，而是把渲染与原生库的扩展能力做成了插件：**RendererPlugin-v2**（渲染器插件）与 **NativeLibPlugin**（原生库扩展加载，明确标注同时服务于 ZL2、FCL 等启动器）都源自 FCL 生态，另有一个 **VerifiedPluginLoad** 库负责校验 APK 签名的原生插件。翻译工作托管在 **Weblate**，项目通过**爱发电**接受赞助，并设有 Discord 社群。

在 Android 侧运行 Java 版这条技术路线上，Zalith Launcher 属于**最活跃的一梯队**。它是 PojavLauncher 路线的继续演进，在其基础上补上了更现代的界面与更贴近国内玩家的资源、网络体验；代码、文档站与信息源全部公开，GPL-3.0 授权，插件机制透明，因此比来路不明的「破解整合版」稳妥得多。它也与本分类里的 PCL2、HMCL、BakaXL 等桌面启动器互补，负责覆盖手机端——同一份正版账号与存档体系下，手机与电脑互相接续，正是它存在的意义。
