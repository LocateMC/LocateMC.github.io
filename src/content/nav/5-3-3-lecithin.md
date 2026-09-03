---
title: "Lecithin"
description: "Lophine 的下游分支，为 Folia 系核心补齐 Paper/Spigot/Bukkit API 兼容性。"
href: "https://github.com/LophineLabs/Lecithin"
icon: '/icons/lecithin.png'
category: "服务端"
subcategory: "Folia系"
tags: ["服务端", "Java版", "Folia分支", "API兼容", "开源"]
order: 3
---
Lecithin 是基于 **Lophine** 的下游分支，目标是在 Lophine 之上**修复与兼容原有的 Paper/Spigot/Bukkit API**——让传统 Bukkit/Paper 插件更顺畅地在 Folia 系核心上运行，同时完整继承 Lophine 的全部能力（生电增强、TPS Bar、多存档格式、Folia Bug 修复、可配置原版特性等）。

### 特点

- **API 兼容层**：补齐 Paper/Spigot/Bukkit API 在 Folia 系核心上的兼容性
- **继承 Lophine 全部特性**：生电增强、可配置原版特性、TPS Bar、linear/b_linear 存档
- **不新增自有 API**：沿用上游 `lophine-api`，仅做兼容性修复
- **持续同步上游**：紧跟 Lophine 节奏，便于跟随官方迭代

### 构建

仓库目前以源码方式发布，需自助构建：

```
git clone https://github.com/LophineLabs/Lecithin.git
cd Lecithin
./gradlew applyAllPatches && ./gradlew createPaperclipJar
```

构建完成后可在 `lecithin-server/build/libs` 找到 JAR。

仓库：https://github.com/LophineLabs/Lecithin