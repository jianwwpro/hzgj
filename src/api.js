import Vue from 'vue'

// 分页
const PAGE_NO = 1
const PAGE_SIZE = 10
const platform='WX';
// 常量 API 接口地址
const HOST = '/hzgj/iface/jk'
// proudctions
const API_PRODUCT_INDEX_API = `${HOST}/exhibitlist`
const API_PRODUCT_SHOW_API = `${HOST}/exhibitdetail`
const API_ACTIVITY_SHOW_API = `${HOST}/tzgg`

// user
const API_SEND_SMS_CODE_URL = `${HOST}/front/user/phoneCode`
const API_USER_REGISTER_URL = `${HOST}/front/user/register`
const API_USER_LOGIN_URL = `${HOST}/front/user/login`
const API_USER_LOGOUT_URL = `${HOST}/front/user/logout`
const API_GET_USER_URL = `${HOST}/front/user/info`
const API_USER_AUTH_PAY_URL = `${HOST}/front/pay/userPay`
const API_USER_ORDER_PAY_URL = `${HOST}/front/pay/orderPay`

const API_USER_SAVE_BANK_URL = `${HOST}/front/bank/save`
const API_USER_DESTROY_BANK_URL = `${HOST}/front/bank/delete`

const API_USER_ORDER_URL = `${HOST}/front/order`

// 设置为请求头为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

export default {
	productions: {
		index: () => {
			return Vue.http.get(API_PRODUCT_INDEX_API, { platform: platform })
		},
		get (id) {
			return Vue.http.get(API_PRODUCT_SHOW_API, { exhibitId: id })
  		},

  },
  activity: {
		list: () => {
			return Vue.http.get(API_ACTIVITY_SHOW_API, { platform: platform })
		},
		get (id) {
			return Vue.http.get(API_ACTIVITY_SHOW_API, { exhibitId: id })
		}
  	},
  exhibits: {
  	list:[
	  {
	  	id: 1,
	  	title: '安徽古建筑展', 
	  	photoIds: '../static/assets/images/1.jpg',
	  	summary: '古徽州一府六县，境内山清水秀，独特的地理环境与历史背景，形成了崇文重教的儒家文化氛围。徽州古建筑具有鲜明的地域风格，独具特色的砖、石、木“三雕”艺术，使之富有细部审美要素。徽州建筑在建筑技艺、民众生活、伦理观念、审美追求方面传递着诸多文化信息，反映了天人合一的文化理念',
	  	startDate: '2016-03-01',
	  	endDate: '2016-03-01',
	  	address: '安徽博物馆新馆'
	  },
	  {
	  	  id:2,
		  title: '从感动出发-------耿秋明中国画展', 
	  	photoIds: '../static/assets/images/2.jpg',
		  summary: '古徽州一府六县，境内山清水秀，独特的地理环境与历史背景，形成了崇文重教的儒家文化氛围。徽州古建筑具有鲜明的地域风格，独具特色的砖、石、木“三雕”艺术，使之富有细部审美要素。徽州建筑在建筑技艺、民众生活、伦理观念、审美追求方面传递着诸多文化信息，反映了天人合一的文化理念',
		  startDate: '2016-03-01',
	  	  endDate: '2016-03-01',
	  	  address: '安徽博物馆新馆'
	  	},
	  	 {
	  	 	id:3,
		  title: '知白守黑------张亮讯张勋军书法作品捐赠展', 
	  	photoIds: '../static/assets/images/3.jpg',
		  summary: '古徽州一府六县，境内山清水秀，独特的地理环境与历史背景，形成了崇文重教的儒家文化氛围。徽州古建筑具有鲜明的地域风格，独具特色的砖、石、木“三雕”艺术，使之富有细部审美要素。徽州建筑在建筑技艺、民众生活、伦理观念、审美追求方面传递着诸多文化信息，反映了天人合一的文化理念',
		  startDate: '2016-03-01',
	  	  endDate: '2016-03-01',
	  	  address: '安徽博物馆新馆'
	  	}
	  	],
	  	get: function(id){
	  		console.log(this.list);
	  		for(var i=0;i<this.list.length;i++){
	  			if(this.list[i].id==id){
	  				return this.list[i];
	  			}
	  		}
	  	}
	},

	pay: {
		userPay (id) {
			return Vue.http.get(API_USER_AUTH_PAY_URL, { out_trade_no: id })
		},
		orderPay (order) {
			return Vue.http.post(API_USER_ORDER_PAY_URL, order)
		}
	},
	user: {
		get (id) {
			return Vue.http.get(API_GET_USER_URL, { id: id} )
		},
		regsiter (user) {
			return Vue.http.post(API_USER_REGISTER_URL, user )
		},
		sendSMSCode (mobile) {
			return Vue.http.get(API_SEND_SMS_CODE_URL, { mobile: mobile} )
		},
		login (user) {
			return Vue.http.post(API_USER_LOGIN_URL, user )
		},
		logout () {
			return Vue.http.get(API_USER_LOGOUT_URL)
		},
		me () {
			return Vue.http.get(API_GET_USER_URL)
		},
		saveBank (bank) {
			return Vue.http.post(API_USER_SAVE_BANK_URL, bank)
		},
		destroyBank (id) {
			return Vue.http.post(API_USER_DESTROY_BANK_URL, { id: id})
		},
		order (pageNo = PAGE_NO, pageSize = PAGE_SIZE, status = 1) {
			return Vue.http.post(API_USER_ORDER_URL, { pageNo: pageNo, pageSize: pageSize, status: status })
		}
	},
	
} 


