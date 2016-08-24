import Vue from 'vue'


// 分页
const PAGE_NO = 1
const PAGE_SIZE = 10
const platform='WX';
// 常量 API 接口地址
const HOST_NEW = 'http://192.168.82.13:81/hzgj/interface'
const HOST = 'http://192.168.82.13:81/hzgj/iface/jk'

//const HOST = '/hzgj/iface/jk'
// proudctions

/**
 * 活动列表
 * 参数：activityType
 */
const API_ACTIVITY_LIST_API = `${HOST_NEW}/activityMessageList`
/**
 * 活动详情
 * 参数：id
 */
const API_ACTIVITY_SHOW_API = `${HOST_NEW}/activityDetail`
/**
	 * 获取展览列表，
	 * isPub 是否推荐
	 * platformid 平台 1：微信  2: APP
	 * menuid 栏目  
	 * 	  APP:  1   正在展览
	 * 		    2   即将开展
	 *          3   历史回顾
	 *    微信： 1	最新展览
				2	全景展览
				3	展览回顾
				4	基本陈列
*/
const API_PRODUCT_INDEX_API = `${HOST_NEW}/exhibitMessageList`
/**
 * 展览详情
 */
const API_PRODUCT_SHOW_API = `${HOST_NEW}/exhibitMessageEntity`



const API_ART_BYEXHIBIT_API = `${HOST}/artlist`
const API_ART_INFO_API = `${HOST}/artdetail`




// 设置为请求头为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

export default {
	//展览
	productions: {
		index: (platformid,menuId,isPub) => {
			return Vue.http.get(API_PRODUCT_INDEX_API, { platformid: platformid,menuId:menuId,isPub:isPub })
		},
		get (id) {
			return Vue.http.get(API_PRODUCT_SHOW_API, { id: id })
  		},

  	},
	//活动
	activity: {
		list: (type,page) => {
			return Vue.http.get(API_ACTIVITY_LIST_API, { activityType: type,pageNo:page==null?1:page,pageSize:20 })
		},
		get (id) {
			return Vue.http.get(API_ACTIVITY_SHOW_API, { id: id })
		}
	},
	//展品
	arts: {
		byExhibit: (id,tdFilter) => {
			var params = {exhibitId:id};
			if(tdFilter!=null){
				params.is3d=tdFilter;
			}
			return Vue.http.get(API_ART_BYEXHIBIT_API,params)
		},
		get: (id) => {
			return Vue.http.get(API_ART_INFO_API,{artId:id})
		}
	}
}


