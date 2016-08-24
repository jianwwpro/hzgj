<template>
<ul class="productions items" id="productions" @scroll="scrollFunc">
	<li v-for="p in productions" v-link="{ name: 'productionShow', params: { id: p.id}}">
	<div class="exhi">
		<div class="poster">
			<img v-bind:src="p.cover | getImagePoster '120x120'">
		</div>
		<div class="content" >
			<p class="title">{{p.titleName}}</p>
			<p class="oth"> {{p.startDate|formatDate}} - {{p.endDate|formatDate}} </p>
		</div>
	</div>
	</li>
</ul>
	<div class="test">

	</div>
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
		data () {
			let params = this.$route.query;
			return api.productions.index(params.platformid,params.menuId,params.isPub)
				.then(res => {
					console.log(res.data);
					return {
						productions: res.data,
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
			document.title = '基本陈列';
		}
		
	}
}
</script>



<style lang="stylus" scoped>
ul{
	width: 18.4rem;
	margin: 0 auto;
}
li{
	width: 100%;
	
	border-bottom:1px solid #dddddd;
	padding-bottom: 0.8rem;
	padding-top: 0.8rem;
}
.exhi{
	width: 100%;
	height: 3.7rem;
	display: -webkit-flex;
	display: -moz-flex;
	display :-ms-flex;
	display :-o-flex;
	display :flex;
	display:-moz-box;
	display: -webkit-box;
	display: box;
}

li:last-child{
	border-bottom: none;
}

.poster{
	width: 3.7rem;
	height: 3.7rem;
	vertical-align: middle;
	margin-right: 0.8rem;
}
.poster img{
	width: 100%;
	height: 100%
	display: block;
	vertical-align: middle;
}

.content{
	overflow: hidden;
	width:100%;
	-moz-box-flex :1;
	-webkit-box-flex :1;
	box-flex :1;
}
.title{
	font-size: 0.8rem;
	color:#333333;
	line-height: 1.22rem;
}
.oth{
	font-size: 0.69rem;
	color: #999999;
	padding-top: 0.6rem;
}

</style>



