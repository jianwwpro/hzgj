export default (router) => {
	router.map({
		'/':{
			name: 'i',
			component: require('./views/index.vue')
		},
		//展览列表
		'/exhibitList': {
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
		//展览展品
		'/exhArts/:id': {
			name: 'exhArts',
			component: require('./views/exhArts.vue'),
			
		},
		//3D
		'/exh3DArts/:id': {
			name: 'exh3DArts',
			component: require('./views/exh3DArts.vue'),
			
		},
		//视频
		'/exhVideos/:id':{
			name:'exhVideos',
			component: require('./views/exhVideos.vue')
		},
		//展品
		'/art/:id': {
			name: 'artInfo',
			component: require('./views/artInfo.vue'),
			
		},
		//通知社教
		'/activityList/:type':{
			name:'activityList',
			component: require('./views/activityList.vue')
		},
		//通知社教详情
		'/activityInfo/:id':{
			name:'activityInfo',
			component: require('./views/activityInfo.vue')
		},
		'/videoPlay':{
			name:'videoPlay',
			component: require('./views/videoPlay.vue')
		},
		'/audioPlay':{
			name:'audioPlay',
			component: require('./views/audioPlay.vue')
		},
		'/vuex':{
			name:'vuex',
			component:require('./views/vuex.vue')
		},
		'/cgzn':{
			name:'cgzn',
			component:require('./views/cgzn.vue')
		},'/gyab':{
			name:'gyab',
			component:require('./views/gyab.vue')
		},
		'/appDownload':{
			name:'appDownload',
			component:require('./views/appDownload.vue')
		},

		'*': {
			component: require('./views/404.vue')			
		}
	})
}
