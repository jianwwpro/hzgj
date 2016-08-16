<template>
<div id="productionShow">
	<div class="top">
		<img  v-bind:src="production.imgUrl | getImagePoster" >
	</div>
	<ul class="clearfix">
		<li><a href="#" v-link="{ name: 'exhInfo', params: { id: production.exhibitId}}"> <img  v-bind:src="images[0]"> </a></li>
		<li><a href="#" v-link="{ name: 'exhArts', params: {id: production.exhibitId}}"><img  v-bind:src="images[1]"></a></li>
		<li><a href="#" v-link="{ name:'exhVideos',params: {id: production.exhibitId}}" ><img  v-bind:src="images[2]"></a></li>
		<li><a href="#" v-link="{name:'exh3DArts',params:{id: production.exhibitId}}" > <img  v-bind:src="images[3]"></a> </li>

	</ul>
	
	<div class="bottom">
		<img class="full-img" v-bind:src="images[4]"  @click="openLocation(production.panoramaUrl)">
	</div>
	
	
</div>
</template>

<style lang="stylus" scoped>
	#productionShow{
		width: 100%;
	}
	.top{
		width: 100%;
	}
	.top img{
		width: 100%;
		height: 12.16rem;
		display: block;
	}

	ul{
		width: 100%;
	}
	ul li{
		width: 50%;
		float: left;
		height: 6.4rem;
		padding-top: 0.26rem
	}
	ul li:nth-child(2n){
		padding-left: 0.13rem;	
	}
	ul li:nth-child(2n+1){
		padding-right: 0.13rem;	
	}
	

	ul li a{
		width: 100%;
	}
	ul li a img{
		width: 100%;
		height: 100%;
		display: block;
	}


	.bottom{
		width: 100%;
		height: 6.34rem;
		margin-top: 0.26rem;
	}
	.bottom img{
		width:100%;
		height: 100%;
	}
	
</style> 
  
<script>
import api from '../api.js'
import { seturl } from '../action'
import store from '../store'




export default {
	data () {
		return {
			images: ['../static/i/11.png','../static/i/12.png','../static/i/14.png','../static/i/13.png','../static/i/qj.png'],
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
			document.title=this.production.exhibitName;
			//this.$route.router.app.title=n.exhibitName;
			if(n.exhibitName=='徽州古建筑'){
				this.images=['../static/i/1.png','../static/i/2.png','../static/i/3.png','../static/i/4.png','../static/i/qj1.png'];
			}
		}
	},

	route: {
		data ({ to : { params: { id }}}) {
			
			return api.productions.get(id)
				.then(res => {

					document.title=res.data.result.exhibitName;
					return {
						production: res.data.result,
					}
				}, err => {
					console.log(err);
					alert('接口错误');
				})
// alert(id);
// var ex= api.exhibits.get(id);
			
			// return {
			// 	production:ex
			// }
		}
	},
	methods: {
		openLocation:function(url){
			
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
