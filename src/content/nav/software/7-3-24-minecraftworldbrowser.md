---
title: "Minecraft 存档管理器"
description: "免安装的 Java 版存档管理器，跨启动器汇总存档并一键备份与恢复。"
href: "https://github.com/Aaron88915/MinecraftWorldBrowser"
icon: "/icons/minecraftworldbrowser.webp"
category: "软件程序"
subcategory: "实用工具（PC）"
tags: ["存档","世界管理","备份","恢复","启动器","免安装","单文件","Windows","PowerShell"]
order: 24
---
Minecraft 存档管理器（英文名 Minecraft World Browser）是一款面向 Windows 的 **Java 版存档管理器**，解决的是一个很具体的痛点：玩久了以后存档会散落在 PCL2、HMCL、官方启动器、Prism Launcher、MultiMC、CurseForge、Modrinth、ATLauncher、GDLauncher 等各自的实例目录里，想找某个存档得靠资源管理器一层层翻。它把这些目录一次性扫出来汇总成一张表，并把备份与恢复做成一键操作。

### 特点
- **跨启动器汇总**：自动识别 `.minecraft/saves/`、`.minecraft/versions/<版本>/saves/`、`instances/<实例>/.minecraft/saves/`、`profiles/`、`modpacks/`、`packs/` 等常见结构，并递归发现启动器实例；未被识别的目录可手动「添加目录」，也可用「全盘扫描」让程序自行搜索。
- **读取存档元数据**：直接解析 `level.dat`，列出世界名称、Minecraft 版本、游戏模式、难度与最后游玩时间，并显示加载器、存档状态、存档大小与真实路径。
- **检索与整理**：按名称、版本或路径搜索，按版本、模式、收藏状态筛选，支持表头排序；可为世界添加收藏、标签与备注。
- **ZIP 备份与还原**：备份时记录原存档位置，恢复时可放回原位；目标位置已存在时可选择覆盖或另建新档，并保留完整备份历史。
- **自动化与便携**：支持自动备份、配置导入导出、拖放目录与列表刷新。
- **新拟态界面**：亮色与暗色两套主题，带内凹按压反馈、平滑滚动与实时列宽调整。

### 实现与平台
程序本体是一份约 300 KB 的 PowerShell 脚本，`Build-Exe.ps1` 借助 Windows 自带的 .NET Framework C# 编译器把它打包成**单文件免安装 EXE**，不需要 Visual Studio 或 .NET SDK；运行环境要求 Windows 10 或 Windows 11，并已启用 .NET Framework 4.8。作者另提供 `-SelfTest` 参数做自检，覆盖 NBT 读取、启动器目录发现、备份恢复安全、主题与布局、平滑滚动、列宽调整、收藏位置保持与存档大小回填等关键行为。配置与备份记录写入 `%LOCALAPPDATA%\PCL2WorldBrowser`（`roots.txt`、`world-metadata.txt`、`backup-history.txt`、`theme.txt` 与 `AutomaticBackups` 目录），扫描缓存只留在内存中，退出即清空——扫描过程本身只读文件，只有主动执行备份、恢复或覆盖时才会写入磁盘。

### 说明
项目于 2026 年 8 月开源，目前迭代到 v3.2.10，尚未声明开源许可协议，也不是 Mojang Studios 或 Microsoft 的官方产品。程序会把世界扫描结果与存档大小缓存放在内存里，因此不会在后台常驻读取硬盘；但**在执行版本升级、安装模组或修改地图之前，建议先点一次「备份」**。下载请认准 Releases 页。

源码与下载：https://github.com/Aaron88915/MinecraftWorldBrowser
