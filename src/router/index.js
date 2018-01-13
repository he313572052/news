import Vue from 'vue'
import Router from 'vue-router'
import Car from '@/components/Car'
import Phone from '@/components/Phone'
import Digital from '@/components/Digital'
import Technology from '@/components/Technology'
import News from '@/components/News'
import My from '@/components/My'
import Home from '@/components/Home'
const routes = [{
		path: '/news/:type/:id',
		component: News
	},
	{
		path: '/my',
		component: My
	},
	{
		path: '/home',
		component: Home,
		children: [{
			path: 'car',
			component: Car
		}, {
			path: 'phone',
			component: Phone
		}, {
			path: 'digital',
			component: Digital
		}, {
			path: 'technology',
			component: Technology
		}]
	},
	{
		path: '*',
		redirect: '/home/car'
	}
]

Vue.use(Router)

export default new Router({
	routes,
	scrollBehavior() {
		return {
			y: 0
		}
	}
})