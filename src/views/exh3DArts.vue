<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
<div class="content">
	<ul class="clearfix">
		<li v-for="art in arts">
			<a href="{{art.threeDime[0].filePath}}"><img v-bind:src="art.conver|getImagePoster '207x207'" alt=""></a>
			<p>{{art.titleName||art.bookName}}</p>
		</li>
	</ul>
</div>
</template>
<style scoped>
	.content{
		width: 20rem;
		margin:0 auto;
	}
	ul{
		width: 100%;
	}
	ul > li{
		width: 9.3rem;
		height: 9.3rem;
		float: left;
		border:1px solid #ccc;
		margin-top: 0.4rem;
		display: inline-block;
		margin-left: 0.45rem;
		text-align: center;
		position: relative;
	}



	ul> li >a{
		display: block;
		width: 100%;
		height: 100%;
		position: relative;

	}
	ul > li > a > img{
		display: block;;
		position: absolute;
		margin: auto auto;
		max-width: 8.8rem;
		max-height: 6rem;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
	}
	ul > li > p{
		width: 9.7rem;
		line-height: 1.5rem;
		font-size:0.69rem; color:#666;
		font-family:"Microsoft YaHei";
		position: absolute;
	    top: 7.8rem;
	}

</style>
<script>
	import api from '../api.js'
	

	export default {
		data () {
			return {
				arts:[]
			}
		},route : {
			data ({ to : {params:{id}}}){
				return api.productions.get(id).then(res=>{
					let artworks = res.data.artworks;
					let ww3D = artworks.ww3D||[];
					let gj3D = artworks.gj3D||[];
					let exhibitArtworks = [];
					exhibitArtworks=exhibitArtworks.concat(ww3D);
					exhibitArtworks=exhibitArtworks.concat(gj3D);
					console.log(exhibitArtworks[0].threeDime[0].filePath)
					
					return {
						arts:exhibitArtworks
					}
				},err=>{
					alert("接口错误");
				})
			}
		},methods:{

		},ready () {
			document.title = '藏品展示';
		}
	}
</script>


