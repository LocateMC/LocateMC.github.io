---
title: 'mcsrc.dev'
description: 'mcsrc.dev 由 FabricMC 维护，把阅读 Minecraft Java 版反编译源码变成网页点击，浏览器本地完成反编译，支持版本对比与引用跳转。'
href: 'https://mcsrc.dev'
icon: '/icons/mcsrc.webp'
category: '在线工具' # 用于分类
subcategory: "服务器与开发者"
tags: ['工具', '源码', '反编译', 'Java 版', '开发者', 'Fabric', '开源', 'MIT']
order: 65
---

mcsrc.dev 把「看 Minecraft Java 版源码」这件事变成了一次网页点击：打开站点、从左侧文件树挑一个类，就能读到反编译后的源码。更特别的是，整个反编译过程跑在你自己的浏览器里——Minecraft 的 jar 由浏览器直接从 Mojang 的服务器拉取，解压与反编译都在本地完成，站点本身不转发、也不重分发任何 Minecraft 代码或字节码。它由 FabricMC 维护，以 MIT 许可开源。

它的能力围绕「读源码的顺手程度」展开：

- **版本对比**：并排 diff 两个 Minecraft 版本的同名类，改动一目了然——这在本地搭一套反编译环境时相当折腾，在这里是顺手的事；
- **继承关系可视化**：直接看清一个类的父类、接口与实现层次，摸清 Mojang 的类结构时非常省事；
- **查找引用、跳转定义与 Mixin 检索**：像 IDE 一样在反编译结果里做 navigation，顺着调用链追下去；为模组开发者准备的 Mixin / Class Tweaker 字符串检索，还能快速定位某个 Mixin 目标或字符串在源码中的落点；
- **字节码视图**：需要看编译器真实产物时，可以切换到 bytecode 视角；
- **编辑器体验**：内置 Monaco（VS Code 同款编辑器），支持行级选中，并能复制指向具体某行的永久链接，方便在群里甩一条精确定位。

它是怎么做到的？反编译由 Vineflower 承担，通过 `@run-slicer/vf` 把 Vineflower 编译成 WebAssembly 在浏览器中运行；混淆名称则借助映射文件还原，站点会从 Fabric 的 Maven 仓库拉取 `net/minecraft/*.json` 一系列映射。类文件图标取自 IntelliJ Platform 图标集（Apache 2.0）。站点部署在 Cloudflare 上，另有一个 beta 子域用于预览新版。

项目仓库为 `FabricMC/mcsrc`，README 自我描述是「An online Minecraft source code viewer」，主要贡献者为 efivariable 与 modmuss50。它在 2025 年 11 月以 POC 起步，同年补上许可证与说明，此后迭代稳定（累计约 194 次提交，2026 年 8 月仍在更新）。仓库明确声明：本项目与 Mojang、Microsoft 无任何关联，不重分发 Minecraft 代码与字节码——这也正是它采用「浏览器内反编译」这一架构的原因。

在 Minecraft 开发者工具链里，它是少见的「零配置源码浏览器」：传统做法要装 JDK、配反编译器、下 jar、处理映射，一套流程半小时起步，现在打开网页就能读源码，写 Mixin 时随手就来；由 FabricMC 出面维护、复用其映射镜像，让它天然与 Yarn / Mixin 的开发习惯对齐，对模组作者尤其顺手；而「跨版本 diff + 继承可视化 + 引用查找」这一套组合，才是它真正取代本地反编译流程的地方。
