// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(iView);

router.beforeEach((to, from, next) => {
  if (to.name == 'resume') {
    store.dispatch('setLayout', false)
  } else {
    store.dispatch('setLayout', true)
  }
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
