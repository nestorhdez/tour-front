import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Tour from '../views/Tour.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/tour/:id',
    name: 'tour',
    component: Tour,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
