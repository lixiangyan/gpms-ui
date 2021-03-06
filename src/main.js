import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
//导入全局样式表
import './assets/css/global.css'

Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'http://localhost:2020/gpms'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
