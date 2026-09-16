---
title: 'Fold Craft Launcher'
description: 'Android 端的 Minecraft: Java Edition 启动器，核心移植自 HMCL，模组加载器支持齐全、更新活跃。'
href: 'https://github.com/FCL-Team/FoldCraftLauncher'
icon: '/icons/fold-craft-launcher.webp'
category: '软件程序' # 用于分类
subcategory: "启动器"
tags: ['启动器', 'Android', 'Java 版', '开源', 'GPL-3.0', 'HMCL', '手机']
order: 8
---

Fold Craft Launcher（简称 **FCL**）是运行在 **Android** 平台上的 Minecraft: Java Edition 启动器，由 **FCL-Team** 开发。它的技术路线很清晰：**核心移植自 HMCL**（`fclcore` 来自 `org.jackhuang.hmcl`），后端则采用 **Amethyst-Android**（PojavLauncher 的 Android 分支）负责 JVM 启动与渲染——把桌面端久经考验的实例管理能力，与移动端的 Java 运行方案拼在了一起。

### 核心能力

- **全版本支持**：原生支持 Minecraft 各版本（含最新快照），模组加载器覆盖 **Forge / NeoForge / LiteLoader / OptiFine / Fabric / Quilt / Cleanroom**，相当齐全。
- **内置多版本 Java 运行时**：自带 **Java 8 / 17 / 21 / 25**，无需自行折腾 JRE，同时也支持导入外部 Java。
- **虚拟鼠标与自定义按键映射**：为触屏操作提供虚拟鼠标，按键布局可自由调整；还能与 **ZalithLauncher2 的控制布局互转**，导入时自动识别并转换。
- **光影支持**：配合 **VirGL / Zink / MG** 渲染器可启用光影；渲染器本身支持**插件化**（FCLRendererPlugin、FCLDriverPlugin）。
- **动态资源管理**：模组、整合包、材质、光影、存档统一管理，并提供全局下载管理与模组前置依赖一键下载。
- **个性化主题**：背景与配色方案均可定制。

### 项目数据与维护状态

仓库创建于 **2022 年 10 月 19 日**，主语言 **Java**，以 **GPL-3.0** 开源，累计约 **4,727 stars / 313 forks**（2026 年 9 月快照），近期提交非常密集，属于 Android 侧维护最活跃的启动器之一。近期的主要工程动作包括：控件转换器从 Go JNI（`libcc.so`）迁移到**纯 Kotlin** 实现（APK 减小约 4.2 MB，且不再依赖 arm64 ABI）、模块合并重构、接入 checkstyle 与 PR 自动评论机器人、以及通过 **Weblate** 承接社区翻译。

### 社区生态位

FCL 是 Android 端 Java 版生态的**中坚力量**，位置由两段关系决定：

1.  **上承 HMCL 与 PojavLauncher**：一边是桌面启动器的实例管理与下载源体系（近期还在跟进上游 HMCL 的 DownloadProvider 重构），一边是移动端的 JVM 与渲染方案，FCL 把两条成熟路线接了起来，这也是它功能最全的原因。
2.  **与 Zalith Launcher 同赛道互补**：ZL2 与 FCL 互为参照——布局可以互转，插件生态也彼此复用（ZL2 的原生库插件就明确服务于两者）。用户在两者之间迁移成本很低。
3.  **下载需认准官方渠道**：网络上存在 `foldcraftlauncher.cn` 一类**由社区自行搭建的非官方下载站**（该站自己也标注了「非官方」）。为避免拿到二次打包的版本，建议一律从本仓库的 **Releases** 处下载。
