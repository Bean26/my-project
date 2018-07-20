import Vue from 'vue'
import Router from 'vue-router'
import AnnieView from '@/view/annieView'
import DravenView from '@/view/dravenView'
import PagesView from '@/view/PagesView'
import HomeView from '@/view/HomeView'
import Transition from '@/view/transition'
import StoreView from '@/view/store'
/* eslint-disable*/
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '/pages/',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'annie',
          name: 'AnnieView',
          component: AnnieView
        },
        {
          path: 'draven',
          name: 'DravenView',
          component: DravenView
        },
        {
          path: 'transition',
          name: 'Transition',
          component: Transition
        },
         {
          path: 'store',
          name: 'StoreView',
          component: StoreView
        },
      ]
    }
  ]
})
