<template>
  <div
    :class="[$style.layout, myClass]"
  >
    <slot />
  </div>
</template>

<script>
export default {
	props: {
		contents: {
			type: Boolean,
			default: false
		},
		columns: {
			type: Number,
			default: 6
		},
		fluid: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		myClass() {
			return {
				'max-w-sm mx-auto': !this.fluid,
				'grid-contents': this.contents,
				'columns-1': this.columns === 1,
				'columns-2': this.columns === 2,
				'columns-3': this.columns === 3,
				'columns-4': this.columns === 4,
				'columns-5': this.columns === 5,
				'columns-6': this.columns === 6
			};
		}
	}
};
</script>

<style lang="scss" module>
.layout {
	display: grid;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	padding: 1rem;

	// > * {
	// 	grid-column-end: span 2;
	// }
}
</style>
