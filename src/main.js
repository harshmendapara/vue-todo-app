import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale });

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
