<template>
<video style="width:100%;height:100%;" controls="controls" preload="preload" autoplay="autoplay">  
        <source v-bind:src="url" type="video/mp4" >示例视频1</source>  
        您的浏览器不支持video标签  
</video>
</template>

<script>


import { seturl } from '../action'
import store from '../store'


export default {
	data () {
		return {
			production: {},
		}
	},
	store,
	vuex: {
	    getters: {
	      url: state => state.url,
	    },
	    actions: {
	      seturl
	    }
	},
	route: {
		data () {
			return {}
		}
	},
	methods: {
	},ready () {
		document.title = '视频播放';	
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


