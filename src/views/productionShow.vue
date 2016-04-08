<template>
<div id="productionShow">
	<div class="row">
		<img class="full-img" v-bind:src="production.photoIds | getImagePoster" >
	</div>
	<div class="row flex">
		<!-- 介绍 -->
		<div class="flex-img left-img" v-link="{ name: 'exhInfo', params: { id: production.id}}">
			<img  v-bind:src="images[0]">
		</div>
		<div class="flex-img right-img" v-link="{ name: 'exhArts', params: {id: production.id}}">
			<img  v-bind:src="images[1]">
		</div>
		
	</div>
	<div class="row flex">

		<div class="flex-img left-img">
			<img  v-bind:src="images[2]">
		</div>
		<div class="flex-img right-img">
			<img  v-bind:src="images[3]">
		</div>
	</div>
	<div class="row">
		<img class="full-img" v-bind:src="images[4]" >

	</div>
	
	
</div>


</template>
  
<script>
import api from '../api.js'

export default {
	data () {
		return {
			images: ['../src/assets/i/js.png','../src/assets/i/zs.png','../src/assets/i/sp.png','../src/assets/i/3d.png','../src/assets/i/qj.png'],
			order: {
				'products[0].id': null,
				'products[0].sum': null,
			},
			production: {},
			state: {
				buy: true,
				pay: false
			}
		}
	}
	,watch : {
		'production': function(n,o){
			console.log(n);
			this.$route.router.app.title=n.title;
		}
	},

	route: {

		data ({ to : { params: { id }}}) {
			
			// return api.productions.get(id)
			// 	.then(res => {
			// 		return {
			// 			production: res.data,
			// 		}
			// 	}, err => {
			// 		console.log(err);
			// 		alert('接口错误');
			// 	})
var ex= api.exhibits.get(id);
document.title=ex.title;
			return {
				production:ex
			}
		}
	},
	methods: {
		buy () {
			this.state.pay = true
		},
		
		closeForm () {
			this.state.pay = false
		},
		stopEvent (e) {
			e.stopPropagation()
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