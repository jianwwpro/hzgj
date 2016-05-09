<template>

		<div id="exhInfo">			
			<ul class="ul-list">
				<!-- <li>
					<a href="#">
						<div class="img-titele">
						   <img src=""/>	
						   <div class="title-msg">
						   	 <h3>我远开展雷锋月我远开展雷锋展</h3>
						   	 <h4>2016-03-18</h4>
						   </div>
						</div>
						<p>省社科联党组书记马雷调研我院省科普基地创建情况省社科联党组书记马雷调研我院省科</p>
						<time>2016-03-18</time>
					</a>
				</li> -->
				<li v-for="p in productions" @click="link(p)">
						<p>{{p.title}}</p>
						<time>{{p.updateDate | formatDate}}</time>
				</li>
				
			</ul>
		</div>
</template>

<script>
import api from '../api.js'
(function () {
    var html = document.documentElement;			
    function onWindowResize() {
        html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px';
    }			
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
})();

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
		if(type==0)
		document.title = '通知公告';
		if (type==1) {
		document.title = '社教活动';	
		};
		
	}
}
</script>

<style lang="stylus" scoped>
*{margin: 0;padding: 0;}
		li {
	list-style: none;
}
#exhInfo{
	width: 94.68%;
	background-color: #fff;
	margin: 0 auto;
}
#exhInfo li:nth-of-type(1) img{width: 100%;height: auto;position: relative;left: 0;top: 0;}
.ul-list{width: 100%;}
#exhInfo li{padding-bottom: 0.3rem;border-bottom: 1px solid #ededed;}
#exhInfo li .img-titele{width: 100%;height: auto;position: relative;}
#exhInfo li .img-titele .title-msg{position: absolute;width: 100%;height: 2.275rem;bottom: 0;left: 0;background: rgba(0,0,0,0.5);padding: 0.3rem 0;}
#exhInfo li .img-titele .title-msg h3{font-size: 1.1rem;line-height: 1.2rem;color: #fff;text-indent: 0.3rem;}
#exhInfo li .img-titele .title-msg h4{font-size: 0.8rem;line-height: 1rem;color: #cec1b8;text-indent: 0.3rem;}
#exhInfo ul {padding: 0.526rem 0;}
.ul-list li p{font-size: 0.78125rem;color: #333333;font-family: "arial narrow";line-height: 1.2rem;margin-top: 0.5rem;}
.ul-list li time{font-size: 0.625rem;color: #b6b6b6;font-family: arial;line-height: 1.4rem;}
		
</style>