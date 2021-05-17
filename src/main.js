import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routes from './routers'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/style.css'
import fHeader from './components/f-header'
import fFooter from './components/f-footer'
require('@/utils/clickS')


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component("f-header",fHeader)
Vue.component("f-footer",fFooter)

const router =new VueRouter({
	routes,
	mode: 'hash'
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
