// astro.config.mjs
// GitHub Pages 静态部署配置（用户名主页仓库形态：https://<username>.github.io/）
// 静态模式：无需 adapter；所有页面与 GET endpoint 在构建期预渲染
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // 原为 'server'（SSR 模式，需 adapter 才能 build）
  site: 'https://LocateMC.github.io', // TODO: 替换为你的真实 GitHub 用户名
  // 注意：用户名主页仓库部署在域名根路径，勿设 base；
  // 若日后改用子路径仓库（<user>.github.io/<repo>/），需补 base 并把源码资源路径相对化
});
