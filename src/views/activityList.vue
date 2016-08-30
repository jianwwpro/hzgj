<template>

<ul class="productions items" id="productions" @scroll="scrollFunc">

	<li class="item" v-for="p in productions"  @click="link(p)">
		<div class="avatar"><img :src="p.coverMap | getImagePoster '120x120'" alt=""></div>
		<div class="content">
			<p class="title">{{p.title}}</p>
			<p class="date">{{p.updateDate | formatDate}}</p>
			<p class="digest">{{p.digest}}</p>
		</div>
	</li>
</ul>

<!--<div class="more">
		<div class="content" >
			<p class="title">{{p.title}}</p>
			<p class="oth"> {{p.updateDate | formatDate}} </p>
		</div>
		
	</div>-->
		
</template>

<script>
import api from '../api.js'

export default {
	data () {
		return {
			type:'',
			productions: [],
			pagination: {
				page: 1,
				limit: 20
			},
			noMoreData: false
		}
	},
	route: {
		data ({ to : { params: { type }}}) {
		return api.activity.list(type)
			.then(res => {
				console.log(res.data);
				return {
					productions: res.data
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
				console.log(p.id);
				
		},
		scrollFunc: function (e) {
			
			if (!this.noMoreData && (e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight) {
				this.pagination.page++
				api.activity.list(this.type,this.pagination.page)
					.then(res => {
						
						if (res.data.artList < 10){
							this.noMoreData = true
							return this.$router.app.snackbar('warning', '没有数据了')
						}

						this.productions = this.productions.concat(res.data);
					}, err => {
						console.log(err);
						// alert('接口错误');
					})
			}
		}
	}
		,ready () {

		let type = this.$route.params.type;
		
			if(type=='xzyg'){
				document.title = '新展预告';
			}else if(type=='tzgg'){
				document.title = '通知公告';
			}else if(type=='sjhd'){
				document.title = '社教活动';
			}else{
				document.title = '咨询活动';
			}
	}
}
</script>

<style lang="stylus" scoped>
@import "../assets/variables.styl"

body
	box-sizzing boder-box
.productions
	width 100%
	padding 0 10px

	.item
		border-bottom 1px solid $borderColor
		width 100%
		height 82px
		padding-top 5px
		padding-bottom 5px
		display -webkit-box
		display box
.avatar
	width 72px
	height 72px
	img 
		display block
		width 72px
		height 72px
.content
	margin-left 10px
	-webkit-box-flex 1
	p
		overflow hidden
		text-overflow ellipsis
		white-space nowrap
		padding-top 5px
	.date
		color $fontColor
	.title
		font-size 15px
		text-overflow ellipsis
		white-space nowrap
		padding-top 5px
	.digest
		color $fontColor
	
	
		
</style>