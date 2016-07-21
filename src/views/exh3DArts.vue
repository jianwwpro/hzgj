<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
<div class="content">
	<ul class="clearfix">
		<li v-for="art in arts">
			<a href="{{art.sdUrl}}"><img v-bind:src="art.artImgUrl|getImagePoster" alt=""></a>
			<p>{{art.artName}}</p>
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
			data({to:{params:{id}}}){
				return api.arts.byExhibit(id,1).then(
					res => {
						return {
							arts: res.data.artList
						}
					},err => {
						console.log(err);
						alert('接口错误');
					}
				)
			}
		},methods:{

		},ready () {
			document.title = '藏品展示';
		}
	}
</script>


