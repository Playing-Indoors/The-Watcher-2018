<template>
	<div class="flex">
		<div
			v-for="(dot, dotIndex) in injury.value"
			:key="dotIndex"
		>
			<input
				:id="`${id}-${dotIndex}`"
				v-model="injury.value[dotIndex]"
				class="hidden"
				type="checkbox"
				@change="handleInjuryToggle(id)"
			>
			<label
				:for="`${id}-${dotIndex}`"
				:class="dot ? $style.active : $style.inactive"
				class="w-4 h-4 block bg-grey-darkest rounded-full shadow ml-2"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true
		},
		injury: {
			type: Object,
			required: true
		},
		saveAttributes: {
			type: Function,
			default: () => {}
		}
	},
	methods: {
		handleInjuryToggle(key) {
			const field = `severe-injuries.${key}.value`;
			this.saveAttributes({
				[field]: this.injury.value
			});
		}
	}
};
</script>

<style lang="scss" module>
.inactive {
	box-shadow: inset 0 0 0 10px #6d6d6d, 0 3px 3px 0 rgba(0, 0, 0, 0.42);
	transition: box-shadow 0.15s ease-out;
}
.active {
	box-shadow: inset 0 0 0 4px #6d6d6d, 0 3px 3px 0 rgba(0, 0, 0, 0.42);
	transition: box-shadow 0.15s ease-out;
}
</style>
