<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div id="exhArts"  class="contents container wrap" id="contents" tapmode>
		<div v-for="p in arts" v-link="{ name: 'artInfo', params: { id: p.id }}">
			<img class="myImg highlight-color" v-bind:src="p.conver | getImagePoster" alt="" title="" />
			<span class="title">{{p.titleName||p.bookName}}</span>
		</div>
	</div>

</template>

<script>
	// var html = document.documentElement;
	// function onWindowResize() {
	// 	html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px';
	// }
	// window.addEventListener('resize', onWindowResize);
	// onWindowResize();




	import api from '../api.js'

	export default {
		data () {
			return {
				arts: [],
				pagination: {
					page: 1,
					limit: 1000
				},
				noMoreData: false
			}
		},
		route: {
			data ({ to : {params: { id }}}) {

				return api.productions.get(id)
				.then(res => {
					console.log(res.data.artworks.wwInfo);
					let wwarts = res.data.artworks.wwInfo||[];
					let gjarts = res.data.artworks.gjInfo||[];
					console.log(wwarts,gjarts);
					console.log(wwarts.concat(gjarts));
				return {
					arts: wwarts.concat(gjarts)

					}
			}, err => {
					console.log(err);
					alert('接口错误');
				})
			}
		},
		methods: {

		},ready () {
			//this.$route.router.app.title="最新展览";

			document.title = '藏品展示';
		}
	}
</script>

<style lang="stylus" scoped>

	/*公共样式*/
	#exhArts{height: 100%; width:100%;

    }
	li{list-style: none;}
	*{padding:0;margin:0;}
	a{text-decoration: none;color:#999;}
	.clearfix:after {content: '\20';display: block;clear: both;visibility: hidden;}
	.highlight-color{-webkit-tap-highlight-color:rgba(0,0,0,0);}
	/*公共样式结束*/
	.contents{width: 18.93rem; margin: 0 auto;}
	.container{
		column-width:9.22rem;
		-webkit-column-width:9.22rem;
		-moz-column-width:9.22rem;
		-o-colum-width:9.22rem;
		-webkit-column-gap:0.4rem;
		-moz-column-gap:0.4rem;
		-o-column-gap:0.4rem;
	}
	.container div{ border:#CCC 1px solid; display:inline-block;width:9.1rem;position:relative; }
	.container img{width: 9.1rem; min-height: 1rem;border: 0px solid #fff;}
	.title{
		line-height:1.5rem; font-size:0.69rem; color:#666;
		text-align:center;
		font-family:"Microsoft YaHei";
	}

</style>


