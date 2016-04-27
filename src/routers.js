export default (router) => {
	router.map({
		'/':{
			name: 'i',
			component: require('./views/index.vue')
		},
		//展览列表
		'/exhibitList/:type': {
			name: 'index',
			component: require('./views/exhibitList.vue')
			},
		//展览首页
		'/p/:id': {
			name: 'productionShow',
			component: require('./views/productionShow.vue'),
			
		},
		//展览介绍
		'/exhInfo/:id': {
			name: 'exhInfo',
			component: require('./views/exhInfo.vue'),
			
		},
		//展览介绍
		'/exhArts/:id': {
			name: 'exhArts',
			component: require('./views/exhArts.vue'),
			
		},
		//通知公告
		'/activityList':{
			name:'activityList',
			component: require('./views/activityList.vue')
		},
		'/videoPlay':{
			name:'videoPlay',
			component: require('./views/videoPlay.vue')
		},
		'/vuex':{
			name:'vuex',
			component:require('./views/vuex.vue')
		},
		'*': {
			component: require('./views/404.vue')			
		}
	})
}
