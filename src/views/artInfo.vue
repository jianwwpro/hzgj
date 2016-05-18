<template>
	<section class="main" id="artInfo">
			<!--内容-->
			<div class="contents">
				<div class="bg_box">
					<div class="content_img">
						<img v-bind:src="art.artImgUrl"/>
					</div>
					<div class="small_button">
						<ul class="highlight-color">
							<li><a href="javascript:" @click="play(art.audioUrl,2)" ><img src="../../static/i/icon-sy.png" alt="" /></a></li>
							<li><a href="javascript:" @click="play(art.videoUrl,1)"><img src="../../static/i/icon-sp.png" alt="" /></a></li>
							<li><a href="javascript:" @click="play(art.url3D,3)"><img src="../../static/i/icon-sd.png" alt="" /></a></li>
						</ul>
					</div>
				</div>
				<div class="wen">
					<p>{{art.artName}}</p>
					<p>{{art.year}}</p>
					<p>{{art.inch}}</p>
					<p>{{art.source}} </p>
					<p>{{art.artDes}}</p>
				</div>
			</div>
		</section>
	<div class="mask" v-if="toast">
		<div>
			<span>无数据</span>
		</div>
	</div>


</template>
  
<script>
import api from '../api.js'
import { seturl } from '../action'
import store from '../store'

export default {
	data () {
		return {
			art:{},
			toast:false
		}
	},
	store,
	vuex: {
	    getters: {
	      url: state => state.url,
	    },
	    actions: {
	      seturl
	    }
	},
	watch:{
		art:function(n,o){
			document.title=n.artName;
		}
	},
	route: {
		data ({ to : { params: { id }}}) {
			return api.arts.get(id)
				.then(res => {
				return {
					art: res.data.result,
					}
			 	}, err => {
			 		console.log(err);
			 		alert('接口错误');
			 	})
		}
	},
	methods: {
		play:function(url,type){
			var _this = this;
			if(url==null||url==''){
				this.toast=true;
				setTimeout(function () {
					_this.toast = false;
				}, 1000);
				return;
			}
			this.seturl(url);
			if(type==1){
				this.$route.router.go({ name: 'videoPlay'});
			}
			if(type==2){
				this.$route.router.go({ name: 'audioPlay'});
			}
			if(type==2){
				window.location.href=url;
			}
		}
	},
	ready () {
		
	}

}

</script>

<style lang="stylus" scoped>
div.mask
	width 100%
	height 100%
	position fixed
	top 44px
	bottom 0
	left 0
	right 0
	color white
	text-align center
	display: table
	>div
		font-size 18px
		display: table-cell
		vertical-align: middle
		>span
			padding 1em 2em
			background rgba(0,0,0,0.3)
			border-radius 3px;

li{list-style: none;}
*{padding:0;margin:0;}
a{text-decoration: none;color:#999;}
.clearfix:after {content: '\20';display: block;clear: both;visibility: hidden;}
.highlight-color{-webkit-tap-highlight-color:rgba(0,0,0,0);}
/*公共样式结束*/
.main{width: 100%;}	


.contents{width: 100%;}
.contents .content_img{-webkit-box-align: center;-webkit-box-pack: center;display:-webkit-box;display:-moz-box;}
.contents .content_img img{-webkit-box-flex: 1;width: 18.93rem;}
.bg_box{background: #F9F9F9; border-bottom: 1px solid #DDDDDD;}
.contents .small_button{margin-top:0.8rem;padding-bottom: 0.8rem;}
.contents .small_button ul{-webkit-box-align: center;-webkit-box-pack: center;display:-webkit-box;display:-moz-box;}
.contents .small_button ul li{-webkit-box-flex: 3;height: 1rem;border-left: 1px solid #DDDDDD;}
.contents .small_button ul li:first-child{border-left: none;}
.contents .small_button ul li img{margin: 0 auto;display:block;max-width: 1.22rem;}
.wen{width:18.93rem; margin: 0 auto;}
.wen p{margin-top:0.42rem;font-size: 0.69rem;color: #666666; }
.wen p:nth-child(1){margin-top:1rem;font-size: 0.85rem;color: #333333;margin-top:0.85rem;}
.wen p:nth-child(2){margin-top:0.85rem;}


</style> 