import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/Login',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/Home',
		name: 'Home',
		component: Home
	},
]

const router = new VueRouter({
	routes
})

export default router
