import Vue from 'vue'
import App from './App.vue'
import echarts from "echarts";
import router from "./router";

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
