<template>
<div>
  Clicked: {{ count }} times
  {{url}}
  <button v-on:click="increment">+</button>
  <button v-on:click="decrement">-</button>
  <button v-on:click="seturl('ddd')">ddd</button>
</div>
<button v-link="{ name: 'index', params: { type:0}}">xxxx</button>

</template>

<script>
import store from '../store'
import { increment, decrement, seturl } from '../action'

export default {
	data () {
		return {
			images: ['../static/i/js.png','../static/i/zs.png','../static/i/sp.png','../static/i/3d.png','../static/i/qj.png'],
			production: {},
		}
	},
	store,
	vuex: {
	    getters: {
	      count: state => state.count,
	      url: state => state.url,
	    },
	    actions: {
	      increment,
	      decrement,
	      seturl
	    }
	},
	watch : {
		
	},
	route: {
	},
	methods: {
		
	},
	ready () {
				
	}

}

</script>