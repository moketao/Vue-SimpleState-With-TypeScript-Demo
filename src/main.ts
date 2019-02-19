import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;
const data = {
  layersSel: [],
  layers:
  [
    {
      id: 'a',
      label: 'a',
    },
    {
      id: 'b',
      label: 'b',
    },
    {
      id: 'cc',
      label: 'cc',
    },
  ],
};
const rootvue = new Vue({
  router,
  data,
  render: (h) => h(App),
});
Vue.prototype.global = rootvue;
rootvue.$mount('#app');
