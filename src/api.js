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

const API_ACTIVITY_LIST_API = `${HOST}/activityList`
const API_ACTIVITY_SHOW_API = `${HOST}/activityDetail`

const API_ART_BYEXHIBIT_API = `${HOST}/artlist`
const API_ART_INFO_API = `${HOST}/artdetail`




// 设置为请求头为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

export default {
	//展览
	productions: {
		index: () => {
			return Vue.http.get(API_PRODUCT_INDEX_API, { platform: platform })
		},
		get (id) {
			return Vue.http.get(API_PRODUCT_SHOW_API, { exhibitId: id })
  		},

  	},
	//通知社教
	activity: {
		list: (type,page) => {
			return Vue.http.get(API_ACTIVITY_LIST_API, { wxMenu: type,page:page==null?1:page })
		},
		get (id) {
			return Vue.http.get(API_ACTIVITY_SHOW_API, { id: id })
		}
	},
	//展品
	arts: {
		byExhibit: (id) => {
			return Vue.http.get(API_ART_BYEXHIBIT_API,{exhibitId:id})
		},
		get: (id) => {
			return Vue.http.get(API_ART_INFO_API,{artId:id})
		}
	}
}


