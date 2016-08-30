<template>
<div id="i">
	<div>
		咨询活动
		<ul>
			<li v-link="{name:'activityList',params:{type:'xzyg'}}">新展预告</li>
			<li v-link="{name:'activityList',params:{type:'tzgg'}}">通知公告</li>
			<li v-link="{name:'activityList',params:{type:'sjhd'}}">社教活动</li>
		</ul>
	</div>
	<div>
		在线看展
		<ul>
			<li><a href="/exhibitList?platformid=1&menuId=4"> 基本陈列</a></li>
			<li><a href="/exhibitList?platformid=1&menuId=3"> 展览回顾</a></li>
			<li><a href="/exhibitList?platformid=1&menuId=2">全景展览</a></li>
			<li><a href="/exhibitList?platformid=1&menuId=1">最新展览</a></li>
		</ul>
	</div>
	<div>
		服务信息
		<ul>
			<li v-link="{name:'gyab'}">关于安博</li>
			<li v-link="{name:'cgzn'}">参观指南</li>
		</ul>
	</div>
	<div>
		App下载
		<ul>
			<li v-link="{name:'appDownload'}">APP下载</li>
			
		</ul>
	</div>
	
</div>
</template>

<style lang="stylus" scoped>
@import "../assets/rem.styl";

ul
	margin-left 20px
	li
		margin-top 5px
.test
	width $appr
	height 10rem
	background pink

</style>
<script>
import api from '../api.js'

export default {
	data () {
		return {
			
			noMoreData: false
		}
	},
	route: {
		data ({ to }) {
		}
	},
	methods: {
		
	},
	ready:function(){
		document.title="安徽博物院";
	}
}
</script>




