// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Home from './pages/Home';
import Page3 from './pages/Page3';
import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import Welcome from './pages/Welcome';

import TableDemo from './pages/TableDemo';
import PictureDemo from './pages/PictureDemo';
import EditDemo from './pages/EditDemo';
import FormDemo from './pages/FormDemo';
import VideoDemo from './pages/VideoDemo';
import RegisterDemo from './pages/RegisterDemo';
import BlankLayout from './layouts/BlankLayout';
import LoginDemo from './pages/LoginDemo';
import SlideDemo from './pages/SlideDemo';
import Info from './pages/Info';

import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/video',
    layout: HeaderAsideFooterResponsiveLayout,
    component: VideoDemo,
  },
  {
    path: '/edit',
    layout: HeaderAsideFooterResponsiveLayout,
    component: EditDemo,
  },
  {
    path: '/welcome',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Welcome,
  },
  {
    path: '/table',
    layout: HeaderAsideFooterResponsiveLayout,
    component: TableDemo,
  },
  {
    path: '/picture',
    layout: HeaderAsideFooterResponsiveLayout,
    component: PictureDemo,
  },
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
    path: '/form',
    layout: HeaderAsideFooterResponsiveLayout,
    component: FormDemo,
  },
  {
    path: '/register',
    layout: BlankLayout,
    component: RegisterDemo,
  },
  {
    path: '/login',
    layout: BlankLayout,
    component: LoginDemo,
  },
  {
    path: '/slide',
    layout: BasicLayout,
    component: SlideDemo,
  },
  {
    path: '/info',
    layout: BasicLayout,
    component: Info,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
