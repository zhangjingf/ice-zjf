// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '用户管理',
    path: '/user',
    icon: 'yonghu',
  },
  {
    name: '系统设置',
    path: '/setting',
    icon: 'shezhi',
    children: [
      {
        name: '基本设置',
        path: '/base',
      },
      {
        name: '评论设置',
        path: '/comment',
      },
    ],
  },
  {
    name: 'Nav3',
    path: '/page3',
    icon: 'home',
  },
  {
    name: '欢迎',
    path: '/welcome',
    icon: 'home',
  },
  {
    name: '\u8868\u683C',
    path: '/table',
    icon: 'home',
  },
  {
    name: '\u7EFC\u5408\u56FE\u8868',
    path: '/picture',
    icon: 'home',
  },
  {
    name: '\u6587\u672C\u7F16\u8F91',
    path: '/edit',
    icon: 'home',
  },
  {
    name: '\u8868\u5355\u9A8C\u8BC1',
    path: '/form',
    icon: 'home',
  },
  {
    name: '\u89C6\u9891',
    path: '/video',
    icon: 'home',
  },
  {
    name: '\u6CE8\u518C',
    path: '/register',
    icon: 'home',
  },
  {
    name: '\u767B\u9646',
    path: '/login',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
