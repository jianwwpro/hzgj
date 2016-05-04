<template>
<ul class="artworks items" id="exhArts" >
	<li v-for="p in arts" v-link="{ name: 'artInfo', params: { id: p.artId }}">
		<div class="poster">
			<img v-bind:src="p.artImgUrl | getImagePoster" />
		</div>
		<p>{{p.artName}}</p>
	</li>
</ul>
</template>

<script>
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
		
			return api.arts.byExhibit(id)
				.then(res => {
					console.log(res.data.artList);
					return {
						arts: res.data.artList
					}
				}, err => {
					console.log(err);
					alert('接口错误');
				})
		}
	},
	methods: {

		// scrollFunc: function (e) {
			
		// 	if (!this.noMoreData && (e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight) {
		// 		this.pagination.page++
		// 		api.productions.index(this.pagination.page, this.pagination.limit)
		// 			.then(res => {
		// 				if (res.data.rows < this.pagination.limit){
		// 					this.noMoreData = true
		// 					return this.$router.app.snackbar('warning', '没有数据了')
		// 				}
		// 				this.productions = this.productions.concat(res.data.rows);
		// 			}, err => {
		// 				console.log(err);
		// 				// alert('接口错误');
		// 			})
		// 	}
		// }
	},ready () {
		//this.$route.router.app.title="最新展览";
		document.title = '藏品展示';
		
	}
}
</script>

<style lang="stylus" scoped>





ul
	-webkit-overflow-scrolling: touch;
	padding 0 5px
	li
		float: left;
		width: 50%;
		div.poster 
			padding 5px
			padding-top: 10px;
			padding-bottom 0
			img
				width 100%
		p
			text-align: center;	


</style>


