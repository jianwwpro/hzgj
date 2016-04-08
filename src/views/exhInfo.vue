<template>
<div id="exhInfo">
	<div class="row">
		<img class="full-img" v-bind:src="exhibit.photoIds | getImagePoster" >
	</div>
	<div class="row-text">
		<p>{{exhibit.summary}}</p>
	</div>
</div>


</template>
  
<script>
import api from '../api.js'

export default {
	data () {
		return {
			exhibit:{}
		}
	},
	route: {
		data ({ to : { params: { id }}}) {
			// return api.productions.get(id)
			// 	.then(res => {
			// 	return {
			// 		exhibit: res.data,
			// 		}
			//  	}, err => {
			//  		console.log(err);
			//  		alert('接口错误');
			//  	})
			var ex= api.exhibits.get(id);
			document.title="展览介绍";
			return {
				exhibit:ex
			}
		}
	},
	methods: {
		
	},
	ready () {
				
	}

}

</script>

<style lang="stylus" scoped>
a{

}
@import '../assets/variables.styl'
$textBackgroundColor = white;


#exhInfo
	height: 100%;
	background-color: $textBackgroundColor;
.row
	width: 100%
	margin-bottom: 5px;
	img
		width: 100%;
.row-text{
	border-radius: 10px;
	border-top: 1px solid #e7e7e7;
	border-left: 1px solid #e7e7e7;
	border-right: 1px solid #e7e7e7;
	border-bottom: none;
	margin-left: 10px;
	margin-right: 10px;
	background-color: #e7e7e7;
	
	p{
		font-size: 20px;
		color: #585858;
		padding: 10px;
	}

}
	

</style> 