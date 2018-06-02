<template>
  <div :class="bg" class="hello">
    <h2>Titles: {{msg}}</h2>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			bg: 'bg-blue'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
