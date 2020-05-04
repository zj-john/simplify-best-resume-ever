import Vue from 'vue';
import Router from 'vue-router';
import Resume from '@/pages/resume';
import Intro from '@/pages/intro';
import Home from '@/pages/home';
import Custom from '@/pages/custom';
import Data from '@/pages/data';
import Main from '@/pages/main';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/resume',
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
      component: Main
    }
  ]
});

export default router;
