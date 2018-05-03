<docs>
</docs>
<template>
	<div>
		<label v-if="label" class="inline-block pb-1 text-xs">{{label}}</label>
		<input
			:id="`v${_uid}`"
			class="block bg-grey-dark text-white py-4 px-4 w-full shadow"
			:type="type"
			ref="input"
			v-bind:value="value"
			v-on:input="updateValue($event.target.value)"
			:required="required"
			:autofocus="autofocus"
			:placeholder="placeholder"
			:disabled="disabled"
			:min="min"
			:max="max"
			:step="step"
			@blur="$emit('blur')"
			@focus="$emit('focus')"
			:name="name"
			:data-test="dataTest"
		>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: '- -'
		},
		required: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		value: {
			type: [String, Number]
		},
		flush: {
			type: Boolean
		},
		min: {
			type: Number,
			default: null
		},
		max: {
			type: Number,
			default: null
		},
		step: {
			type: Number,
			default: null
		},
		name: {
			type: String
		},
		dataTest: {
			type: String
		}
	},
	methods: {
		updateValue(value) {
			let updateValue = value;
			// Only do number validation if the input is a number.
			if (this.type.toLowerCase() === 'number' && value.length > 0) {
				// Not all browsers limit type="number" to numbers, so we better convert it first
				updateValue = Number(value);
				// Let's then check to make sure that number was actually valid.
				// Edge converts it to 0
				// Chrome converts it to NaN
				if (isNaN(updateValue)) {
					updateValue = 0;
				}
				if (this.step) {
					updateValue = Math.round(updateValue);
				}
				if (this.max !== null && this.max < updateValue) {
					updateValue = this.max;
				} else if (this.min !== null && this.min > updateValue) {
					updateValue = this.min;
				}
				// Since we're validating the input, update the "presentation" value
				// This is not reactive, presentation only.
				// https://vuejs.org/v2/guide/components.html#Child-Component-Refs
				this.$refs.input.value = updateValue;
			}
			this.$emit('input', updateValue);
		}
	}
};
</script>
