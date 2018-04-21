<template>
	<div
		class="text-center w-full"
		:class="horizontal ? 'flex justify-between items-end' : ''"
	>
		<div v-if="horizontal">[]</div>
		<div class="text-5xl font-bold">{{number}}</div>
		<div v-if="name" class="text-xxs text-grey-lightest">{{name}}</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String
		},
		number: {
			type: Number
		},
		horizontal: {
			type: Boolean,
			default: false
		}
	}
};
</script>
