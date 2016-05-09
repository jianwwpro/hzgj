

<template>
<div class="contents" id="cgzn">
		<div class="wen">
			<p class="bt">一.地理位置</p>
			<p>老馆:安徽省合肥市安庆路268号。</p>
			<p>新馆:安徽省合肥市怀宁路268号(天鹅湖南500米)。</p>
		</div>
		<div class="wen">
			<p class="bts">二.免费开放时间</p>
			<p>星期二至星期日9:00－－17:00(16：00起停止取票、入场);</p>
			<p>星期一(除国家法定节假日外)闭馆。</p>
		</div>
		<div class="wen">
			<p class="bts">三.预约/投诉电话</p>
			<p>
				讲解预约电话:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0551-63736655
			</p>
			<p>参观预约、咨询投诉电话:&nbsp;&nbsp;&nbsp;&nbsp;0551-63736658</p>
			<p>“安徽好人馆”讲解预约电话:&nbsp;&nbsp;0551-62823465</p>
		</div>
		<div class="wen">
			<p class="bts">四.新馆讲解服务</p>
			<p>1.语音导览器：租金30元／台，押金100元／台，并提供有效证件。</p>
			<p>2.人工讲解服务100元／小时。</p>
			<p>3.无线团队系统：在人工讲解的基础上可免费使用无线团队讲解系统，需押金200元／套，并提供有效证件。</p>
			<p>4.组团要求：为保证参观质量，每个讲解团队不超过30人，超过30人建议分成2个以上的团队讲解。</p>
		</div>
	</div>
</template>

<script>
import api from '../api.js'

export default {
	data () {
		return {

		}	
	},
	route: {
		
	},
	methods: {

	},ready () {
		//this.$route.router.app.title="最新展览";
		document.title = '参观指南';
		
	}
}
</script>

<style lang="stylus" scoped>
/*公共样式*/
html,body{height: 100%; width:100%;}
li{list-style: none;}
*{padding:0;margin:0;}
a{text-decoration: none;color:#999;}
.clearfix:after {content: '\20';display: block;clear: both;visibility: hidden;}
.highlight-color{-webkit-tap-highlight-color:rgba(0,0,0,0);}
.contents{width: 100%;}
.wen{width:18.93rem; margin: 0 auto;}
.bt{color:#666666;margin-top:1rem !important;font-weight: bold;margin-left: 0 !important;}
.bts{color:#666666;margin-top:0.69rem !important;font-weight: bold;margin-left: 0 !important;}
.wen p{font-size: 0.69rem;color: #666666; margin-left: 1.92rem;margin-top: 0.42rem;}
</style>


