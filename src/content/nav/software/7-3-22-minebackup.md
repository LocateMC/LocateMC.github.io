---
title: "MineBackup"
description: "跨平台 MC 存档备份与还原工具，增量备份 + 内置 7-Zip 高压缩，支持游戏内热键一键备份。"
href: "https://github.com/Leafuke/MineBackup"
icon: "/icons/minebackup.webp"
category: "软件程序"
subcategory: "实用工具（PC）"
tags: ["备份","存档","还原","增量备份","7-Zip","跨平台","开源","C++","ImGui"]
order: 22
---
MineBackup 是一款专注于 Minecraft 世界存档保护的开源桌面工具，基于 C++20 与 Dear ImGui 构建，提供 Windows x64、Linux x86_64（deb / AppImage）与 macOS 15+ arm64（dmg）三个平台的原生安装包，以 GPL-3.0 协议开源。它把「备份」与「还原」这两件事做得足够简单：首次启动的向导会异步扫描标准 Java 版与基岩版存档目录，并能识别 HMCL、Prism Launcher、Modrinth App、PCL2 / PCLCE 以及网易版 Minecraft 的实例位置，勾选确认后为每个实例建立独立配置与备份子目录，默认写入 `Documents/MineBackup-Backups`。

### 特点
- **一键备份 / 还原**：选中存档 → 点 Backup 完成备份；还原时可从 `.7z` 归档或本地备份目录回滚到任意历史状态。
- **智能增量模式**：借鉴 Git 思路做增量备份，只记录变化部分，显著节省时间与磁盘占用。
- **内置 7-Zip 压缩核心**：自带压缩引擎，无需额外安装解压软件，另支持 Zstd 进一步压缩体积。
- **游戏内热键**：游戏中按 `Alt+Ctrl+S` 触发对当前世界的热备份，自动检测正在游玩的世界并广播存档请求；配合 MineBackup Mod 还能用 `Alt+Ctrl+Z` 一键回滚。
- **退出自动备份**：开启 *DetectOnExit* 后，Minecraft 关闭时自动执行备份。
- **自定义路径与多语言**：备份可存放到任意目录，界面提供英文与中文。

### 下载与安装
Windows 用户下载 `MineBackup-windows-x64.exe`（已签名），Linux 选用 `.deb` 或 AppImage，macOS 使用 arm64 的 dmg（未公证，需在「隐私与安全性 → 仍要打开」中放行）。全部安装包可在 Releases 页获取，并附 `SHA256SUMS` 供校验；另有免 GUI 的 `minebackup-cli`，可配合 systemd / 任务计划程序做无人值守的定时备份。

### 项目现状
作者已推出第二代产品 FolderRewind（Windows 10+ 另有 MineRewind 插件），定位为功能更全、界面更现代的「时间机器」，并将成为后续维护重心；MineBackup 进入维护模式，仅修复关键缺陷与安全问题。另需注意 1.14.0 起存在较多破坏性变更，升级后建议先在「工具」菜单执行「自动校验核心功能」，并做几次备份还原测试。除 Minecraft 存档外，该工具对任意文件夹同样适用。

源码与下载：https://github.com/Leafuke/MineBackup
