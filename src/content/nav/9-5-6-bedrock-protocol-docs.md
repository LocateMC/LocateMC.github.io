---
title: 'Bedrock Protocol Docs'
description: 'Mojang 官方维护的 Bedrock 网络协议参考文档，面向第三方服务端与协议库开发者。'
href: 'https://mojang.github.io/bedrock-protocol-docs/latest/'
icon: '/icons/bedrock-protocol-docs.png'
category: '开发'
subcategory: '基岩 服务端'
tags: ['Bedrock', '协议', '文档', '基岩', 'Mojang', '官方', '基岩服务端']
order: 6
---

Bedrock Protocol Docs 是由 **Mojang**（现属 Microsoft / Xbox Game Studios）官方发布并持续维护的 **Minecraft Bedrock Edition 网络协议参考文档**。文档由 `github.com/Mojang/bedrock-protocol-docs` 仓库中的版本化协议 schema 元数据自动生成，配套提供版本号选择器（`latest` + 多个历史分支，从 2020 年的 protocol 407 至今），并在页脚明确标注「Generated from versioned protocol schema metadata」。它不是协议教程，而是协议白皮书：精确描述客户端与服务器之间传输的每一个数据包格式与语义，供开发者构建与 Bedrock 协议兼容的网络层软件时直接查阅。

### 内容范围
文档主要面向**第三方 Bedrock 服务端、代理、机器人、库与反作弊系统**的开发者，内容组织按下列主题划分：
- **Packets（数据包，共 235 个）**：按网络标识符（ID）升序排列，覆盖登录握手（LoginPacket）、游戏状态同步、实体/玩家移动、物品与库存、区块数据、命令系统、UI 表单、摄像机控制、EDU 专属功能（CodeBuilder、化学实验台等）、资源包传输等。条目页面提供字段名称、类型、长度、是否可选等序列化细节。
- **Supporting types（支持类型，共 526 个）**：复杂数据类型，如坐标、物品堆栈等。
- **Primitives（基础类型）**：varint、string 等序列化原语。
- **Guides（指南）**：专题文档，包括 NetherNet 信令、反作弊配置（Configuring anti-cheat）、玩家移动、方块破坏、子区块请求系统等。
- **Changelog（变更日志）**：按协议版本归档，反映 2020–2026 年间协议演进历史。

### 社区生态位
在 Bedrock 生态里，**Bedrock Protocol Docs** 是除 Wiki 之外的"协议层"权威参考：当 Bedrock 服务端（如 Nukkit、PowerNukkitX、Dragonfly、Endstone、LeviLamina）的开发者需要了解某个数据包的字节级格式、字段语义、协议版本差异时，它是最直接、最权威的依据——因为它由协议本身的定义方（Mojang）发布，而非第三方解析。文档顶部还以版本标签链接到 Mojang 的 GitHub Releases，让开发者能在文档—源码—版本三者之间穿梭对照。在 Bedrock 服务端 SDK 与工具链不断壮大的今天，这份官方协议文档长期扮演"协议标准源头"的角色，是任何想深入 Bedrock 网络层的人绕不开的入门与进阶资料。