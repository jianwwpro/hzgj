<template>
<ul class="productions items" id="productions" @scroll="scrollFunc">

	<li v-for="p in productions" v-link="{ name: 'productionShow', params: { id: p.exhibitId }}">
		
		<div class="first" v-if="$index==0">
			<div class="poster">
				<img v-bind:src="p.imgUrl | getImagePoster">
			</div>
			<div class="content" >
				<p class="title">{{p.exhibitName}}</p>
				<p class="oth">{{p.startTime}} -- {{p.endTime}}</p>
				<p class="oth" >{{p.address}}</p>
			</div>
		</div>

		<div class="more">
			<div class="content" v-if="$index!=0">
				<p class="title">{{p.exhibitName}}</p>
				<p class="oth"> {{p.startTime}} -- {{p.endTime}} </p>
				<p class="oth">{{p.address}}</p>
			</div>
			<div class="poster" v-if="$index!=0">
				<img v-bind:src="p.imgUrl | getImagePoster">
			</div>
		</div>
			
	</li>
</ul>
</template>

<script>
import api from '../api.js'
import store from '../store'
import { increment, decrement } from '../action'


export default {
	data () {
		return {
			productions: [],
			pagination: {
				page: 1,
				limit: 10
			},
			noMoreData: false,
			type:0

		}
	},
	store,
	vuex: {
	    getters: {
	      count: state => state.count
	    },
	    actions: {
	      increment,
	      decrement
	    }
	},
	route: {
		data ({ to : { params: { type }}}) {
			this.type=type;
		// return {	
		// 	productions : api.exhibits.list
		// }
		return api.productions.index()
			.then(res => {
				console.log(res.data);
				return {

					productions: res.data.lists[type],
					
				}
			}, err => {
				console.log(err);
				alert('接口错误');
			})
		}
	},
	methods: {

		scrollFunc: function (e) {
			
			if (!this.noMoreData && (e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight) {
				this.pagination.page++
				api.productions.index(this.pagination.page, this.pagination.limit)
					.then(res => {
						if (res.data.rows < this.pagination.limit){
							this.noMoreData = true
							return this.$router.app.snackbar('warning', '没有数据了')
						}
						this.productions = this.productions.concat(res.data.rows);
					}, err => {
						console.log(err);
						// alert('接口错误');
					})
			}
		}
	},ready () {
		//this.$route.router.app.title="最新展览";
		if(this.type==0){
			document.title = '最新展览';
		}else if(this.type==1){
			document.title = '全景展览';
		}else if(this.type==2){
			document.title = '展览回顾';
		}else if(this.type==3){
			document.title = '正在展览';
		}
		
	}
}
</script>

<style lang="stylus" scoped>

.content
	overflow: hidden;
	//margin: 0 5px 0 10px
	overflow: hidden;
	width 100%
	-moz-box-flex 1
	-webkit-box-flex 1
	box-flex 1
	margin-left 5px
	margin-bottom 5px
	p
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		//margin: 2px 0 2px 0;
	.title
		font-size 16px;
	.oth
		margin-top 10px
		font-size 13px
		color #a0a0a0
ul
	-webkit-overflow-scrolling: touch;
	box-sizing: border-box;
	height: 100%;
	position: relative;
	overflow-y auto
	width 100%
	li
		padding-top 10px
		border-bottom: 1px solid #ccc
		width 100%
		.more
			display -webkit-flex
			display -moz-flex
			display -ms-flex
			display -o-flex
			display flex
			display -moz-box
			display -webkit-box
			display box
			//width: 98%
			.poster
				/*-moz-box-flex 3
				-webkit-box-flex 3
				box-flex 3*/
				width 78px
				img
					width 78px
					height 78px
					float right
					margin-right 5px
					margin-bottom 5px
		.first
			div.poster img
				width 100%
				height 100%
				//margin-bottom 2px
					


</style>


