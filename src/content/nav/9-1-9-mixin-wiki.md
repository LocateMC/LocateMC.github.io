---
title: 'Mixin Wiki'
description: '一个强大的 Java Mixin 框架的官方维基，该框架允许开发者在运行时精确地修改 Java 字节码。'
href: 'https://github.com/SpongePowered/Mixin/wiki/'
icon: 'https://cdn.jsdelivr.net/gh/LocateMC/LocateMC.github.io@main/public/icons/sample.png'
category: '开发'
subcategory: 'Java 模组'
tags: ['Java', '开发', 'Mixin', 'ASM', '字节码', '框架', 'API']
order: 9
---

Mixin 是一个功能极其强大的 Java 字节码修改框架，它为开发者提供了一套声明式的、易于使用的 API，来在运行时对其他 Java 类（特别是 Minecraft 的代码）进行精确的“注入”和修改。这份 GitHub Wiki 则是该框架最核心、最权威的官方文档，详细阐述了 Mixin 的工作原理、注解用法、高级技巧以及最佳实践。

### 发展历程

Mixin 最初由 **Sponge** 项目开发，旨在为其服务器端 API 提供一种比传统字节码操作（如直接使用 ASM）更安全、更稳定、更易于维护的代码注入方式。随着 Fabric 模组加载器的兴起，Fabric 社区全面采纳了 Mixin 作为其核心的修改技术。这使得 Mixin 从一个项目内部工具，一跃成为了整个现代 Minecraft 模组开发（尤其是 Fabric/Quilt 生态）的**事实标准**和底层基石。这份维基也因此成为了所有现代模组开发者必须学习和查阅的核心技术文档。

### 社区生态位

Mixin 在 Minecraft 社区中扮演着“**Java 代码的外科手术刀**”和“**现代模组开发的底层引擎**”这一至关重要的角色。
1.  **从“覆盖”到“注入”的革命**：在 Mixin 出现之前，模组间修改同一个游戏类，极易产生冲突和崩溃。Mixin 通过其独特的“注入式”修改（即在方法的开头、结尾或特定位置插入代码，而非完全覆盖），极大地提升了模组间的兼容性，这是现代模组生态得以繁荣的技术前提。
2.  **开发者的终极武器**：它为模组开发者提供了前所未有的、深入到游戏代码最底层的修改能力。任何原版代码的行为，原则上都可以通过 Mixin 进行精确地调整和修改。
3.  **高门槛与高回报**：Mixin 是一个非常强大的工具，但学习曲线也相对陡峭。这份维基是所有希望掌握这项“黑魔法”的开发者唯一的、最可靠的学习路径。精通 Mixin，是成为一名高级 Minecraft 模组开发者的必经之路。