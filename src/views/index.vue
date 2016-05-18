<template>
<div id="i">
	<div>
		咨询活动
		<ul>
			<li v-link="{name:'activityList',params:{type:2}}">新展预告</li>
			<li v-link="{name:'activityList',params:{type:1}}">通知公告</li>
			<li v-link="{name:'activityList',params:{type:0}}">社教活动</li>
		</ul>
	</div>
	<div>
		在线看展
		<ul>
			<li v-link="{name:'index',params:{type:3}}">基本陈列</li>
			<li v-link="{name:'index',params:{type:2}}">展览回顾</li>
			<li v-link="{name:'index',params:{type:1}}">全景展览</li>
			<li v-link="{name:'index',params:{type:0}}">最新展览</li>
		</ul>
	</div>
	<div>
		服务信息
		<ul>
			<li v-link="{name:'gyab'}">关于安博</li>
			<li v-link="{name:'cgzn'}">参观指南</li>
		</ul>
	</div>
</div>
</template>

<script>
import api from '../api.js'

export default {
	data () {
		return {
			productions: [],
			pagination: {
				page: 1,
				limit: 10
			},
			noMoreData: false
		}
	},
	route: {
		data ({ to }) {
			return api.productions.index(this.pagination.page, this.pagination.limit)
				.then(res => {
					return {
						productions: res.data.rows,
					}
				}, err => {
					console.log(err);
					alert('接口错误');
				})
		}
	},
	methods: {
		
	},ready:function(){
		document.title="安徽博物院";
	}
}
</script>

<style lang="stylus" scoped>
ul
	margin-left 20px
	li
		margin-top 5px

</style>


