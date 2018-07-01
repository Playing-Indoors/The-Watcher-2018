<template>
	<component
		:is="element"
		:type="type"
		:class="[baseClass, colorClass]"
		:to="to"
		:href="href"
		@click="$emit('click')"
		@blur="$emit('blur')"
	>
		<slot/>
	</component>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'yellow',
			validator: color =>
				['yellow', 'white', 'text', 'red'].indexOf(color) !== -1
		},
		submit: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'normal',
			validator: size => ['normal'].indexOf(size) !== -1
		},
		to: {
			type: [String, Object],
			default: null
		},
		href: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			baseClass: 'block py-3 px-4 no-outline text-center no-underline'
		};
	},
	computed: {
		colorClass() {
			if (this.color === 'yellow') {
				return 'bg-yellow text-white hover:bg-yellow-dark focus:bg-yellow-dark';
			} else if (this.color === 'white') {
				return 'bg-white text-black hover:bg-white-dark focus:bg-grey-lightest';
			} else if (this.color === 'text') {
				return 'bg-transparent text-white hover:underline';
			} else if (this.color === 'red') {
				return 'bg-red text-white hover:bg-red-dark focus:bg-red-dark';
			}
		},
		element() {
			if (this.to) {
				return 'router-link';
			}
			if (this.href) {
				return 'a';
			}
			return 'button';
		},
		type() {
			if (this.element === 'button') {
				return this.submit ? 'submit' : 'button';
			}
			return null;
		}
	}
};
</script>
