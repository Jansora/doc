import {defineConfig} from 'dumi';

const title = 'Java 学习手册';
// const title = '张洋源 (Jansora)';
export default defineConfig({
  title: `${title}`,
  favicon:
    'https://cdn.jansora.com/logo/logo.png',
  logo:
    'https://cdn.jansora.com/logo/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: false,
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/Jansora',
    },
  ],
  locales: [['zh-CN', '中文']]
  // more config: https://d.umijs.org/config
});
