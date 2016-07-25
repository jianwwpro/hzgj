<template>
	<div class="app_download">
		<div class="wx" v-if='isWx'>
			<p>一、点击右上方按钮</p>
			<p>二、选择在浏览器中打开</p>
			<p>三、即可自动下载APP</p>
		</div>
	
        <a v-if='isWx==false' href="http://cms.ahm.cn/hzgj/web/hzgj.apk"></a>
    </div>

</template>
<style lang="stylus"  scoped>
	.app_download
		width 100%
		position relative
		a
			display block
			position absolute
			border 0
			height 74px
			width 220px
			left 50%
			top calc(50vh)
			margin-left -114px
			margin-top -32.5px
			background url('../../static/i/a.png')
			background-position 0 0
			background-size 220px 130px
		.wx
			
			p
				width 220px
				height 30px
				margin 0 auto
				font-size 16px
				background #666
				margin-top 60px
				padding-left 20px
				line-height 32px
				border-radius 10px
				color #fff
			p:nth-of-type(1)
				background #8fb300
</style>

<script>
	
	export default{
		data(){
			return {
				isWx:true
			}
		},
		ready(){
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i)=="micromessenger") {
				this.isWx=true;
		 	} else {
				this.isWx=false;
				window.location.href='http://cms.ahm.cn/hzgj/web/hzgj.apk';
			}


		}
	}


</script>