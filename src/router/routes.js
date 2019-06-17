// 导入文件时, 如果没有 ./, 默认从node_modules查找文件
import routesComponent from './routesComponent.js'

//路由配置
export default [

	{
		path: '/test',
		name: 'Test',
		component: routesComponent.Test
	},

	{
		path: '/v',
		name: 'V',
		component: routesComponent.V
	},

	{
		path: '/register',
		name: 'Register',
		component: routesComponent.Register
	},

	{
		path: '/login',
		name: 'Login',
		component: routesComponent.Login
	},

	{
		path: '/order',
		name: 'Order',
		component: routesComponent.Order
	},

	{
		path: '/detail/:pid',
		name: 'Detail',
		component: routesComponent.Detail
	},

	{
		path: '/address',
		name: 'Address',
		component: routesComponent.Address
	},

	{
		path: '/search',
		name: 'Search',
		component: routesComponent.Search
	},

	{
		path: '/',
		name: 'Main',
		component: routesComponent.Main,

		children: [
			{
				path: '/index',
				name: 'Index',
				component: routesComponent.Index
			},

			{
				path: '/shopcart',
				name: 'Shopcart',
				component: routesComponent.Shopcart
			},

			{
				path: '/my',
				name: 'My',
				component: routesComponent.My
			},

			{
				path: '*',
				redirect: {name: 'Index'}
			}
		]
	},
	
]