<template>
<div id="activityInfo">
<div id="page-content">
	<div id="img-content" class="rich_media_area_primary">
	    <h2 class="rich_media_title" id="activity-name">
	        安徽博物院荣获全省文物宣传信息工作先进单位 
	    </h2>
	    <div class="rich_media_meta_list">		                        
	         <em id="post-date" class="rich_media_meta rich_media_meta_text">2015-09-07</em>
	        <span class="rich_media_meta rich_media_meta_text rich_media_meta_nickname">安徽博物院</span>
	    </div>
	    <div class="rich_media_content " id="js_content" v-html="activity.content">
	        
	    </div>
	</div>
</template>

<script>
import api from '../api.js'

export default {
	data () {
		
		return {
			activity: {},
			
			noMoreData: false
		}
	},
	route: {
		data ({ to : {params: { id }}}) {		
			return api.activity.get(id)
				.then(res => {
					console.log(res.data.result);
					return {
						activity: res.data.result
					}
				}, err => {
					console.log(err);
					alert('接口错误');
				})
		}
	},
	methods: {
		link:function(){

		}
		// scrollFunc: function (e) {
			
		// 	if (!this.noMoreData && (e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight) {
		// 		this.pagination.page++
		// 		api.productions.index(this.pagination.page, this.pagination.limit)
		// 			.then(res => {
		// 				if (res.data.rows < this.pagination.limit){
		// 					this.noMoreData = true
		// 					return this.$router.app.snackbar('warning', '没有数据了')
		// 				}
		// 				this.productions = this.productions.concat(res.data.rows);
		// 			}, err => {
		// 				console.log(err);
		// 				// alert('接口错误');
		// 			})
		// 	}
		// }
	},ready () {
		//this.$route.router.app.title="最新展览";
		document.title = '藏品展示';
		
	}
}
</script>

<style lang="stylus" scoped>

.rich_media_area_primary
    position relative
    padding 20px 15px 15px
    background-color #fff
	h2 
		font-size: 25px;
		font-weight 400


.rich_media_meta_list {
    position: relative;
    z-index: 1;
}

.rich_media_meta_list {
	margin-top: 10px;
    margin-bottom: 18px;
    line-height: 20px;
    font-size: 17;
    

 }
 em {
    	font-style: normal;
 }

 .mm_appmsg .rich_media_meta{
	font-size: 17px;
	 vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 10px;
 }
