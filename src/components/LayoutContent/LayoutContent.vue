<template>
	<div
		:style="posTop"
		:class="[$style.layout]"
		class="scrolling-touch overflow-y-scroll"
	>
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		top: {
			type: Number,
			default: 72
		}
	},
	computed: {
		posTop() {
			return `top: ${this.top}px;`;
		}
	}
};
</script>

<style lang="scss" module>
.layout {
	position: absolute;
	// top: 72px;
	left: 0;
	right: 0;
	bottom: 0;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background: #424242;
	}
}
</style>
