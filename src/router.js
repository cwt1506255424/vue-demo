const RouterView = () => import("#/RouterView");

const routes= [
	{
		path: '/',
		name: 'home',
		component: () => import('~/Home'),//按需加载
		redirect: '/menu1',
		children: [
			{
				path: 'menu1',
				name: 'menu1',
				component: RouterView,
				redirect: '/menu1/menu1_1',
				meta: { name: '菜单1', code: 'menu1' ,icon: 'el-icon-eleme'},
				children: [
					{
						path: 'menu1_1',
						name: 'menu1_1',
						component: () => import('~/menu1/Menu1_1'),
						meta: { name: '菜单1_1', code: 'menu1_1'},
					},
					{
						path: 'menu1_2',
						name: 'menu1_2',
						component: () => import('~/menu1/Menu1_2'),
						meta: { name: '菜单1_2', code: 'menu1_2'},
					},
					{
						path: 'menu1_3',
						name: 'menu1_3',
						component: () => import('~/menu1/Menu1_3'),
						meta: { name: '菜单1_3', code: 'menu1_3'},
					},
				],
			},
			{
				path: 'menu2',
				name: 'menu2',
				component: RouterView,
				redirect: '/menu2/menu2_1',
				meta: { name: '菜单2', code: 'menu2' ,icon: 'el-icon-user-solid'},
				children: [
					{
						path: 'menu2_1',
						name: 'menu2_1',
						component: () => import('~/menu2/Menu2_1'),
						meta: { name: '菜单2_1', code: 'menu2_1'},
					},
					{
						path: 'menu2_2',
						name: 'menu2_2',
						component: () => import('~/menu2/Menu2_2'),
						meta: { name: '菜单2_2', code: 'menu2_2'},
					},
					{
						path: 'menu2_3',
						name: 'menu2_3',
						component: () => import('~/menu2/Menu2_3'),
						meta: { name: '菜单2_3', code: 'menu2_3'},
					},
				],
			},
			{
				path: 'menu3',
				name: 'menu3',
				component: RouterView,
				redirect: '/menu3/menu3_1',
				meta: { name: '菜单3', code: 'menu3' ,icon: 'el-icon-setting'},
				children: [
					{
						path: 'menu3_1',
						name: 'menu3_1',
						component: () => import('~/menu3/Menu3_1'),
						meta: { name: '菜单3_1', code: 'menu3_1'},
					},
					{
						path: 'menu3_2',
						name: 'menu3_2',
						component: () => import('~/menu3/Menu3_2'),
						meta: { name: '菜单3_2', code: 'menu3_2'},
					},
					{
						path: 'menu3_3',
						name: 'menu3_3',
						component: () => import('~/menu3/Menu3_3'),
						meta: { name: '菜单3_3', code: 'menu3_3'},
					},
				],
			},
		]
	},
	{ path: '/login', name: 'login', component: () => import('~/Login') },
	{ path: "*", redirect: '/login' },
];

export default routes;