// astro.config.mjs
// GitHub Pages 静态部署配置（自定义域名 locatemc.com + 原生地址 LocateMC.github.io）
// 静态模式：无需 adapter；所有页面与 GET endpoint 在构建期预渲染
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static', // 原为 'server'（SSR 模式，需 adapter 才能 build）
  // 【SEO 2026-09-24】规范域名取自定义域名 locatemc.com，而非 github.io。
  // 该站有双身份（locatemc.com 经 Cloudflare 代理 / locatemc.github.io 原生），
  // 二者指向同一份构建产物。此处统一以 locatemc.com 为规范域名：
  //   - sitemap 内所有 URL 均以此前缀生成（勿让搜索引擎收录 github.io 版本）
  //   - 页面级 canonical 亦指向该域名（见 src/layouts/AppLayout.astro）
  // 更换主域名时，本文件与 AppLayout.astro 的 SITE_ORIGIN 需同改。
  site: 'https://locatemc.com',
  // 【SEO 2026-09-24】sitemap 自动生成 sitemap-index.xml + sitemap-N.xml。
  // 仅在 static 构建期产出，故只装在 public 侧（dev 为 output:'server' 装之无用）。
  // filter：排除内容管理器与数据接口，它们由 robots.txt 一并屏蔽。
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  // 【页面切换提速】viewport 策略：进入视口的内部链接（页眉/底部「导航 / 资源」Tab）
  // 在浏览器空闲时即预取整页 HTML + 独有 JS chunk，首次切换由「点击后下载」变为「缓存命中」。
  // 需与 ViewTransitions（AppLayout 内 <ViewTransitions />）配合，二者在页面中均已就位。
  prefetch: { defaultStrategy: 'viewport' },
  // 【切换提速 2026-09-24】CSS 全部内联进各页 HTML，消掉切页时「HTML 一跳 + 该页 CSS
  // 再一跳」的串行回源 RTT。与 dev 侧保持一致（config 属双目录各自维护，需手动对齐）。
  build: { inlineStylesheets: 'always' },
  // 注意：用户名主页仓库部署在域名根路径，勿设 base；
  // 若日后改用子路径仓库（<user>.github.io/<repo>/），需补 base 并把源码资源路径相对化
});
