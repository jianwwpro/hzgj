<template>
<audio controls="controls" autoplay="true"> 
   <source v-bind:src="url" /> 
</audio>
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
		document.title = '音频播放';	
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


