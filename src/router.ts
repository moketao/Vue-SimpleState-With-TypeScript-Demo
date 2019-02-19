import Vue from 'vue';
import Router from 'vue-router';
import Layers from './views/Layers.vue';
import Boxs from './views/Boxs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layers',
      component: Layers,
    },
    {
      path: '/boxs',
      name: 'Boxs',
      // route level code-splitting
      // this generates a separate chunk (boxs.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "boxs" */ './views/Boxs.vue'),
    },
  ],
});
