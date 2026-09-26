---
title: "Lecithin"
description: "Lophine 的下游分支，为 Folia 系核心补齐 Paper/Spigot/Bukkit API 兼容性。"
href: "https://github.com/LophineLabs/Lecithin"
icon: "/icons/lecithin.webp"
category: "服务端"
subcategory: "Folia系"
tags: ["服务端", "Java版", "Folia分支", "API兼容", "开源"]
order: 3
---
Lecithin 是基于 Lophine 的下游分支，目标是在 Lophine 之上修复并兼容原有的 Paper/Spigot/Bukkit API，让传统 Bukkit/Paper 插件能更顺畅地运行在 Folia 系核心上。它同时完整继承了 Lophine 的全部能力，包括生电增强、TPS Bar、多存档格式、Folia Bug 修复与可配置原版特性等。

- **API 兼容层**：补齐 Paper/Spigot/Bukkit API 在 Folia 系核心上的兼容性；
- **继承上游全部特性**：生电增强、可配置原版特性、TPS Bar 与 linear/b_linear 存档一并沿用；
- **不新增自有 API**：沿用上游的 `lophine-api`，自身只做兼容性修复；
- **持续同步上游**：紧跟 Lophine 的迭代节奏，便于跟随官方更新。

需要注意的是，Lecithin 目前以源码方式发布，需要自助构建：克隆仓库后依次执行 `./gradlew applyAllPatches` 与 `./gradlew createPaperclipJar`，产物会出现在 `lecithin-server/build/libs` 下。对既想用上 Folia 的并行架构、又舍不得原有 Bukkit/Paper 插件遗产的服主来说，它是少数对症的方案，只是上手门槛比直接更换核心要高；建议先在测试环境验证插件兼容性。