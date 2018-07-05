<template>
	<div
		class="w-full relative text-center"
	>
		<div class="text-5xl font-bold">{{number}}</div>
		<div v-if="name" class="absolute w-full text-xxs text-grey-lightest">{{name}}</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		},
		number: {
			type: Number,
			default: 0
		}
	}
};
</script>
