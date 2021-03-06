import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Tour from '../views/Tour.vue';
import AddTour from '../views/AddTour.vue';
import EditTour from '../views/EditTour.vue';

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
  {
    path: '/create/tour',
    name: 'addtour',
    component: AddTour,
  },
  {
    path: '/edit/:id',
    name: 'editTour',
    component: EditTour,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
