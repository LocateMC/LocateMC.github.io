---
title: 'OptiFine Shaders 文档'
description: '由 OptiFine 作者 sp614x 亲自编写和维护的、最原始且最权威的 OptiFine 光影包技术规范文档。'
href: 'https://github.com/sp614x/optifine/blob/master/OptiFineDoc/doc/shaders.txt'
icon: '/icons/optifine.webp'
category: '开发'
subcategory: 'Java 光影'
tags: ['开发', '光影', 'Shaders', '文档', 'OptiFine', 'GLSL', '规范']
order: 3
---

这是存放于 OptiFine 官方 GitHub 仓库中的官方技术规范文档，也是整个 Minecraft 光影开发领域的创始文档和最高规范。该文档由 OptiFine 的唯一开发者 `sp614x` 编写，以极其精炼和技术化的语言，详细定义了 OptiFine 光影包的完整技术标准，包括文件结构、渲染管线、所有可用的 `uniform` 变量、常量、函数以及 `shaders.properties` 的配置格式。

在任何图形化的文档站或社区维基出现之前，这份官方文档是全世界所有光影开发者唯一可以依赖的技术参考。多年以来，随着 OptiFine 本身的版本迭代，`sp614x` 会直接在这份文档中追加和修改内容；所有光影开发的技术和知识，都源于对该文档的解读、研究和实验，它见证了光影技术从诞生到繁荣的整个历史。

它的地位可以说是光影开发的圣经、一切规则的基石。

- **绝对的权威**：它不是对规范的解释，它本身就是规范——任何关于 OptiFine 光影工作原理的疑问，最终、最准确的答案都只能在这里找到。
- **高耸的技术壁垒**：该文档以极其致密、缺乏示例和解释的风格而闻名，这让光影开发的学习曲线异常陡峭，也无形中筛选出了社区中最具毅力和技术实力的顶尖开发者。
- **所有现代文档的源头**：无论是 ShaderLABS Wiki、MineGraph，还是 Iris 的官方文档，很大程度上都在尝试翻译、解释和补充这份文档中定义的核心规范；为了与庞大的 OptiFine 光影生态兼容，后来的光影加载器都必须以它定义的标准为蓝本进行开发。

阅读它的门槛不低：建议先借助社区教程理解光影包的整体结构，再回到这份规范里逐项核对细节。
