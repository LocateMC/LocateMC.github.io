---
title: 'flags.sh'
description: "一键生成 Minecraft 服务端启动脚本，内置 Aikar's Flags 的 G1GC 调优与崩溃自动重启。"
href: 'https://flags.sh'
icon: '/icons/flags-sh.webp'
category: '在线工具' # 用于分类
subcategory: "服务器与开发者"
tags: ['工具', '服务端', '启动脚本', 'JVM', 'Aikar Flags', 'G1GC', '开源', 'MIT']
order: 63
---

flags.sh 是一个**服务端启动脚本生成器**：勾几个选项，它就吐出一段针对 Minecraft 服务端调好的 `java` 启动命令，省去手动抄 JVM 参数的麻烦。原项目由 **Encode42** 创建，现由 **YouHaveTrouble** 维护（仓库 `YouHaveTrouble/flags.sh`，站点页脚即指向该地址），以 **MIT** 许可开源，用 Blitz.js + Mantine UI 构建，也可以自建部署。

### 怎么用

页面只有四项输入，全部在浏览器里完成，无需注册：

- **Filename**：服务端核心 Jar 的文件名（须与配置文件同目录）
- **Memory**：分配内存，提供 **4 / 8 / 12 / 16 / 20 GB** 五个档位；页面提示**至少分配 4 GB**
- **GUI**：是否启用服务端自带的图形控制台；无桌面环境下会自动关闭
- **Auto-restart**：服务端崩溃或被停掉后自动拉起，按 `CTRL + C` 才退出脚本

结果区分为 **Windows（批处理）** 与 **Java（bash 脚本）** 两栏，复制走即可用。

### 生成的是什么

输出的核心是 **Aikar's Flags** —— Paper 社区久经考验的 G1GC 调优方案，例如 `-XX:+UseG1GC`、`-XX:G1HeapRegionSize=8M`、`-XX:G1NewSizePercent=30`、`-XX:G1MaxNewSizePercent=40`、`-XX:G1ReservePercent=20`、`-XX:MaxGCPauseMillis=200`、`-XX:InitiatingHeapOccupancyPercent=15` 一整套，并附带 `-Dusing.aikars.flags=https://mcflags.emc.gs` 与 `-Daikars.new.flags=true` 标记，方便插件与工具识别；较新的脚本还会补上 `--add-modules=jdk.incubator.vector` 以启用 JDK 孵化期的向量 API。此外还提供 **Pterodactyl 开销计算**，供面板服场景校正内存数值。

### 发展历程

仓库首次提交于 **2022 年 2 月 28 日**，灵感来自同类站点 **startmc.sh**，此后历经「大规模重构 + 高级参数选项」等迭代，累计 **67 次提交**。2023 年底曾挂出归档公告，2024 年 2 月取消归档，2025 年 4 月又更新了 CNAME 并把相关信息指向新仓库，说明项目仍在被接续维护。

### 社区生态位

flags.sh 扮演的是「**开服流程的第一道工序**」：

1.  **把抄参数变成勾选项**：Aikar's Flags 是 Paper / Spigot 生态的事实标准启动参数，但原文是一长串论坛帖。flags.sh 把「读帖、理解、复制、改内存数值」压缩成四个选项，对新手尤其友好。
2.  **跨平台的落地能力**：直接给出 Windows 与 Linux 两套写法，还顺手处理了自动重启这类运维小事，省掉一层脚本编写工作。
3.  **与同类工具并列的入口级地位**：和 startmc.sh 一样，它不参与服务端本身的运行，却几乎出现在每个「如何开服」教程的第一步——属于导航站里典型的高频实用工具。
