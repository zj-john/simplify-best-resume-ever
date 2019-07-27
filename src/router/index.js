import Vue from 'vue';
import Router from 'vue-router';
import Resume from '@/pages/resume';
import Home from '@/pages/home';
import Custom from '@/pages/custom';
import Data from '@/pages/data';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume/:resumeid',
      name: 'resume',
      component: Resume
    },
    {
      path: '/custom',
      name: 'custom',
      component: Custom
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    }
  ]
});
