import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(bootstrap);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
