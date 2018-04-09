<template>
	<component
		:is="element"
		:type="type"
		:class="[baseClass, colorClass]"
		@click="$emit('click')"
		@blur="$emit('blur')"
		:to="to"
	>
		<slot></slot>
	</component>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'yellow',
			validator: size => ['yellow', 'text', 'red'].indexOf(size) !== -1,
		},
		submit: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'normal',
			validator: size => ['normal'].indexOf(size) !== -1,
		},
		to: {
			type: [String, Object],
		},
	},
	data() {
		return {
			baseClass: 'block py-3 px-4 w-full no-outline',
		};
	},
	computed: {
		colorClass() {
			if (this.color === 'yellow') {
				return 'bg-yellow text-white hover:bg-yellow-dark focus:bg-yellow-dark';
			}
			if (this.color === 'text') {
				return 'bg-transparent text-white hover:underline';
			}
		},
		element() {
			if (this.to) {
				return 'router-link';
			}
			return 'button';
		},
		type() {
			if (this.element === 'button') {
				return this.submit ? 'submit' : 'button';
			}
			return null;
		},
	},
};
</script>
