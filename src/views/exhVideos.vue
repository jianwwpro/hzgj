<template>
	<ul class="videos">
		<li v-for="video in videos">
			<a href="#" @click="play(video.url)" ><img v-bind:src="playImage" alt=""></a>
			<p>{{video.name}}</p>
		</li>
	
	</ul>
</template>

<style scoped>


	.videos{
		width: 18.9rem;
		margin: 0 auto;
		
	}

	li{
		width: 9.4rem;
		height: 7.86rem;
		float: left;
		font-size: 0.64rem;
	}
	li a{
		width: 100%;
		display: block;
		margin-top: 0.8rem;
	}
	li a img{
		width: 8.8rem;
		height: 5.8rem;
		display: block;
		margin: 0 auto;
	}
	li p{
		margin-top: 0.53rem;
		text-align: center;
	}


</style>

<script>
	import api from '../api.js'
import { seturl } from '../action'
import store from '../store'

	export default{
		data(){
			return {
				videos:[],
				playImage:'../static/i/play.png'

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
		route: {
			data ({ to : {params:{id}}}){

				return api.productions.get(id).then(res=>{
					console.log(res.data.result.videoUrl);
					return {
						videos:res.data.result.videoUrl
					}
				},err=>{
					alert("接口错误");
				})
			}
		},
		ready(){
			
		},methods:{
			play: function(url){
				this.seturl(url);
				this.$route.router.go({ name: 'videoPlay'});
			}
		}

	}

</script>