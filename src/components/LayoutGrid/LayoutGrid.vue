<template>
	<div
		:class="$style.layout"
		class="max-w-sm mx-auto"
	>
		<slot />
	</div>
</template>

<style lang="scss" module>
.layout {
	display: grid;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: repeat(6, 1fr);
	padding: 1rem;

	> * {
		grid-column-end: span 2;
	}
}
</style>
