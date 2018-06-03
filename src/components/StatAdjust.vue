<template>
	<div
		class="flex justify-center"
	>
		{{item}}
		<button type="button" class="text-5xl text-white" @click="adjust(-1)">&ndash;</button>
		<input
			:value="value"
			type="number"
			class="text-4xl font-bold w-32 text-center bg-transparent text-white appearance-none"
			steps="1"
			@input="updateValue($event.target.value)"
		>
		<button type="button" class="text-5xl text-white" @click="adjust(1)">+</button>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			required: true
		},
		item: {
			type: [Number, Object],
			default: null
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 999
		},
		updateTempObject: {
			type: Function,
			default: () => {}
		}
	},
	methods: {
		updateValue(value) {
			this.$emit('input', Math.trunc(value));
		},
		adjust(amount = 1) {
			const newValue = this.value + amount;

			this.updateTempObject({ survival: newValue });
			this.updateValue(newValue);
		}
	}
};
</script>
