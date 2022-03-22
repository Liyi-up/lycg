import { defineConfig } from 'dumi';
import { components } from './conponents';
import { samples } from './samples';
const repo = 'lycg';

export default defineConfig({
  title: repo,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  favicon: 'https://s4.ax1x.com/2021/12/23/TGYgZd.png',
  logo: 'https://s4.ax1x.com/2021/12/23/TGYgZd.png',
  mode: 'site',
  resolve: {
    passivePreview: true,
  },
  // ssr: {},
  exportStatic: {},
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
    '/samples': [
      {
        title: '概要',
        path: '/samples',
      },
      {
        title: '地图',
        children: samples.map,
      },
      {
        title: '头像裁切',
        children: samples.avatar,
      },
      {
        title: '签字板',
        children: samples.signature,
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
      {
        title: '数据录入',
        children: components.dataEntry,
      },
      {
        title: '其他',
        children: components.other,
      },
      {
        title: '数据展示',
        children: components.dataView,
      },
    ],
  },
  locales: [['zh', '中文']],
});
