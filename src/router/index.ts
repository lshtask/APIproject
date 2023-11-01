import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';
import HomePage from '@/views/HomePage/HomePage.vue';
import InterfaceSquare from '@/views/InterfaceSquare/InterfaceSquare.vue';


const hasGithubPages = import.meta.env.VITE_GHPAGES;

export default createRouter({
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: BasicLayout,
      redirect: '/homepage',
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          meta: { title: '首页', icon: 'icon-icon-test' },
          component: HomePage,
        },
        {
          path: '/interfacesquare',
          name: 'interfacesquare',
          meta: { title: '接口广场', icon: 'icon-icon-test' },
          component: InterfaceSquare,
        },
        {
          path: '/interfacemanagement',
          name: 'interfacemanagement',
          meta: { title: '接口管理', icon: 'icon-icon-test' },
          component: InterfaceSquare,
        },
        {
          path: '/interfaceanalysis',
          name: 'interfaceanalysis',
          meta: { title: '接口分析', icon: 'icon-icon-test' },
          component: InterfaceSquare,
        },
        {
          path: '/administratorsettings',
          name: 'administratorsettings',
          meta: { title: '管理员设置', icon: 'icon-icon-test' },
          component: InterfaceSquare,
        },
      ],
    },
  ],
});
