<template>
<div id="productionShow">
	<div class="row">
		<img class="full-img" v-bind:src="production.imgUrl | getImagePoster" >
	</div>
	<div class="row flex">
		<!-- 介绍 -->
		<div class="flex-img left-img" v-link="{ name: 'exhInfo', params: { id: production.exhibitId}}">
			<img  v-bind:src="images[0]">
		</div>
		<div class="flex-img right-img" v-link="{ name: 'exhArts', params: {id: production.exhibitId}}">
			<img  v-bind:src="images[1]">
		</div>
		
	</div>
	<div class="row flex">

		<div class="flex-img left-img" @click="play(production.videoUrl)" >
			<img  v-bind:src="images[2]">
		</div>
		<div class="flex-img right-img"  @click="openLocation(production.url3D)">
			<img  v-bind:src="images[3]">
		</div>
	</div>
	<div class="row">
		<img class="full-img" v-bind:src="images[4]"  @click="openLocation(production.panoramaUrl)">

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
			images: ['../static/i/js.png','../static/i/zs.png','../static/i/sp.png','../static/i/3d.png','../static/i/qj.png'],
			production: {},
			
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
	}
	,watch : {
		'production': function(n,o){
			console.log(n);
			//this.$route.router.app.title=n.exhibitName;
		}
	},

	route: {
		data ({ to : { params: { id }}}) {
			
			return api.productions.get(id)
				.then(res => {
					console.log(res.data.result);
					return {
						production: res.data.result,
					}
				}, err => {
					console.log(err);
					alert('接口错误');
				})
// alert(id);
// var ex= api.exhibits.get(id);
			document.title=ex.exhibitName;
			// return {
			// 	production:ex
			// }
		}
	},
	methods: {
		openLocation:function(url){
			alert(url);
			window.location.href=url;
		},
		play:function(url){
			this.seturl(url);
			console.log(this.url);
			this.$route.router.go({ name: 'videoPlay'});
		}
	},
	ready () {
		
	}

}

</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

#productionShow
	.flex
		width 100%
		display -webkit-box
		display -webkit-flex
		display flex
		-webkit-box-orient horizontal
		-webkit-flex-flow row
		margin-bottom 10px
		.flex-img
			width 50%		
			height 50%
			-webkit-box-flex 1
			-webkit-flex 1
			flex 1
			-moz-box-flex 1.0
			-webkit-box-flex 1.0
			box-flex 1.0
		.left-img
			padding-right 5px
		.right-img
			padding-left 5px
		img 
			width: 100%
			
	.row
		width 100%
		.full-img
			width 100%
			margin-bottom 5px
	h1
		font-size 20px
		margin-bottom 10px
	p
		&.addrs
			font-size 18px
			color #777
			margin-bottom 10px
		&.intro
			font-size 16px
	a.btn
		text-decoration none
		display block
		background $themeColor
		width 100%
		color white
		height 40px
		line-height 40px
		text-align center
		font-size 20px
		letter-spacing .5em
		position fixed
		left 0
		bottom 0px
div.mask
	position fixed
	top 100%
	left 0
	bottom 40px
	right 0
	background rgba(0,0,0,0.3)
	form
		padding .5em 0
		position absolute
		bottom 0px
		background white
		width 100%
		font-size 18px
		border-top 1px solid $themeColor
		>div
			margin 0 15px
// transition
div.mask.fade-transition
	transition: all .3s ease
	top 0
div.mask.fade-enter, div.mask.fade-leave
	top 100%
form.fade-transition
	transition: all .3s ease
	bottom 0px
form.fade-enter, div.fade-leave
	bottom 0px
</style> 