import { White } from '@/typings';
import { lazy } from 'react';
const User = lazy(() => import(/* chunkName: "Search" */ '@/pages/User'));
// const List = lazy(() => import(/* chunkName: List */ '@/pages/List'));
const Home = lazy(() => import(/* chunkName: Home */ '@/pages/Home'));
const Owned = lazy(() => import(/* chunkName: Owned */ '@/pages/Owned'));
const Receive = lazy(() => import(/* chunkName: Owned */ '@/pages/Receive'));
const Index = lazy(() => import(/* chunkName: Index */ '@/pages/Index'));
const NoFound = lazy(
  () => import(/* chunkName: NoFound */ '../components/NoFound'),
);
export const TabBarList: White.RouteTabBar[] = [
  {
    path: '/',
    component: Home,
    icon: 'white-home1',
    sceneMode: 'scroll',
    title: '商城',
  },
  {
    path: '/owned',
    component: Owned,
    icon: 'white-tradingdata',
    sceneMode: 'scroll',
    title: '已拥有',
  },
  // {
  //   path: '/list',
  //   component: List,
  //   icon: 'white-order',
  //   sceneMode: 'scroll',
  //   title: '统计',
  // },
  {
    path: '/user',
    component: User,
    icon: 'white-account',
    sceneMode: 'scroll',
    title: '我的',
  },
];

const routes: White.RouteConfig[] = [
  {
    path: '/',
    component: Index,
    tabBars: TabBarList,
  },
  {
    path: '/receive',
    component: Receive,
  },
  {
    path: '*',
    component: NoFound,
  },
];

export default [...routes];
