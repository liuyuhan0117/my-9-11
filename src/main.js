/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 刘宇涵
 * @Date: 2020-09-11 08:43:32
 * @LastEditors: 刘宇涵
 * @LastEditTime: 2020-09-11 08:54:21
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')