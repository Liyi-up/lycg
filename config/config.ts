import { defineConfig } from 'dumi';
import { components } from './conponents';
const repo = 'lycg';

export default defineConfig({
  title: repo,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  mode: 'site',
  resolve: {
    passivePreview: true,
  },
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: 'sdks',
      path: '/sdks',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Liyi-up/lycg',
    },
  ],
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '快速上手',
        path: '/guide/quick-start',
      },
      {
        title: '按需加载',
        path: '/guide/import-on-demand',
      },
    ],
    '/components': [
      {
        title: '基础组件',
        children: components.basic,
      },
    ],
  },
  locales: [['zh', '中文']],
});
