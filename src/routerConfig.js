// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Home from './pages/Home';
import Page3 from './pages/Page3';
import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: Home,
  },
  {
    path: '/page3',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Page3,
  },
  {
    path: '/welcome',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Welcome,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;