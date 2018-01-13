import Vue from 'vue'
import FastClick from 'fastclick'
import App from '@/App'
import { AjaxPlugin } from 'vux'
import router from '@/router/index.js'
import store from '@/store/index.js'
//ajax
Vue.use(AjaxPlugin)
Vue.prototype.$http.defaults.baseURL = 'http://api.honpe.com:3000'
Vue.prototype.$http.interceptors.request.use(function(config) {
	store.dispatch('showLoading');
	return config;
}, function(error) {
	Promise.reject(error);
})
Vue.prototype.$http.interceptors.response.use(function(config) {
	store.dispatch('hideLoading');
	return config;
}, function(error) {
	Promise.reject(error);
})
//防止点击延迟
FastClick.attach(document.body)
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box')