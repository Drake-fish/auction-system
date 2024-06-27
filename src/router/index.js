import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemList from '@/components/ItemList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemList,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
