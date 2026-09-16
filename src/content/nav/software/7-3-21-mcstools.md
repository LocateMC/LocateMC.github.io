---
title: "MCSTools"
description: "基于 Tauri 的跨平台蓝图工具箱，5 种结构格式互转，还能做材料统计与 360° 3D 预览。"
href: "https://docs.mcschematic.top/zh/"
icon: "/icons/mcstools.webp"
category: "软件程序"
subcategory: "实用工具（PC）"
tags: ["蓝图","结构文件","格式转换","地图画","3D预览","开源","跨平台","Tauri"]
order: 21
---
MCSTools（蓝图工具箱）是一款基于 Tauri 2.0 构建的 Minecraft 蓝图辅助工具，前端 Vue 3 + 后端 Rust，安装包不足 20MB，支持 Windows / macOS / Linux。它把过去散落在各类模组与网页工具里的结构文件能力收进一个桌面应用：本地蓝图库以 Tauri 安全存储离线管理（元数据走 SQLite，自动提取尺寸、作者等参数并生成缩略图，预览加载 <0.3 秒），网络蓝图库则可从 MC 蓝图站一键导入社区作品。格式侧兼容香草结构 `.nbt`（含机械动力方案）、建筑小帮手 `.json`、建筑投影 `.litematic`、创世神 `.schem`（含新版 Axiom `.blueprint`）与基岩版 `.mcstructure`（测试阶段）共五类，并支持任意两者之间互转。围绕蓝图还提供一整套加工能力——详情参数、版本历史轨迹、蓝图分割器、方块替换（简单模式保留属性只换 ID / 精准模式完全覆盖）、NBT 源数据直接编辑、材料统计（按方块类型汇总并可导出 CSV），以及基于 Deepslate 的 360° 全视角 3D 结构预览；创意工具则支持由图片生成地图画（平面 / 立体两种模式，带抖动算法、可导出多种格式）与由 OBJ / GLTF / GLB / STL 三维模型转出蓝图。

### 发展历程
MCSTools 由国内开发者 guapi_exe 主导开发，仓库早期挂在其个人账号 HiBer2007 下，后迁移至 `guapi-exe/McSTools` 持续维护，以 AGPL-3.0 协议开源。项目选择 Tauri 2.0 而非体积臃肿的 Electron，用 Rust 承担蓝图解析、转换与地图画生成等重计算，从而把安装体积压到 20MB 以内；当前最新版本为 v1.3.0，已通过 GitHub Releases 提供 Windows 安装包、macOS 的 dmg 以及 Linux 的 AppImage / deb / rpm 全平台构建。文档站 `docs.mcschematic.top` 与蓝图库 `mcschematic.top` 同属一套体系，应用内的「网络蓝图库」直接对接后者，形成"站点提供内容、客户端提供能力"的分工。

### 社区生态位
MCSTools 在生态中扮演着 **"蓝图格式的中枢转换站"** 与 **"中文蓝图工作流的一体化桌面端"** 的角色。在它之前，MC 的结构文件处理是割裂的：Litematica 管投影、WorldEdit 管 `.schem`、原版结构方块管 `.nbt`、基岩端又是另一套 `.mcstructure`，跨阵营搬运往往只能借助跑在浏览器里的在线转换器，既受体积限制又难处理大型建筑。MCSTools 把"解析—转换—统计—预览—生成"串成一条本地流水线，配合可直接对接中文蓝图内容的网络仓库，与 MC 蓝图站（资源聚合）、在线转换站（轻量应急）形成互补：前者解决"蓝图从哪来"，它解决"蓝图怎么用"。对建筑党、生电玩家与整合包作者而言，它更像一个不依赖游戏本体就能拆解、再加工建筑的"蓝图工具箱"，也是目前少见的由中文社区主导维护的同类开源项目。

### 平台与方向
界面可在深色 / 浅色模式间自动切换，支持自定义主题色与背景，并内置英文、中文、日文三种语言以及应用内自动更新。官方已公布的开发路线包含两项：基岩版蓝图的完整适配（当前仅基础解析与方块实体数据读取）与跨设备蓝图库的云端同步。

官网与文档：https://docs.mcschematic.top/zh/
源码与下载：https://github.com/guapi-exe/McSTools
