<template>

<ul class="productions items" id="productions" @scroll="scrollFunc">

	<li v-for="p in productions" @click="link(p)">
		<div class="more">
			<div class="content" >
				<p class="title">{{p.title}}</p>
				<p class="oth"> {{p.updateDate | formatDate}} </p>
			</div>
			
		</div>
			
	</li>
</ul>

		
</template>

<script>
import api from '../api.js'

export default {
	data () {
		return {
			type:0,
			productions: [],
			pagination: {
				page: 1,
				limit: 10
			},
			noMoreData: false
		}
	},
	watch: {
		type: function(n,o){
			if(n==1)
				document.title = '活动讲座';
			if (n==0) {
				document.title = '通知公告';	
			};
			if (n==2) {
				document.title = '新展预告';	
			};
		}
	},
	route: {
		data ({ to : { params: { type }}}) {
		this.type=type;
		return api.activity.list(type)
			.then(res => {
				console.log(res.data);
				return {
					productions: res.data.artList,
				}
			}, err => {
				console.log(err);
				alert('接口错误');
			})
		}
	},
	methods: {
		link:function(p){
			if(p.wxSuCai==true){
				window.location.href=p.sourceUrl;
			}else 
				this.$route.router.go({name:'activityInfo',params:{id:p.id}});
		},
		scrollFunc: function (e) {
			
			if (!this.noMoreData && (e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight) {
				this.pagination.page++
				api.activity.list(this.type,this.pagination.page)
					.then(res => {
						console.log(res);
						if (res.data.artList < 10){
							this.noMoreData = true
							return this.$router.app.snackbar('warning', '没有数据了')
						}

						this.productions = this.productions.concat(res.data.artList);
					}, err => {
						console.log(err);
						// alert('接口错误');
					})
			}
		}
	},ready () {
		
		
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