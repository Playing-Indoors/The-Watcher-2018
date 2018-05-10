<template>
	<div
		class="flex flex-col"
	>
		<div
			v-for="asset in value"
			:key="asset"
			class="mb-4 flex items-center"
		>
			<div class="flex-grow w-full p-3 bg-grey">{{fightingArts[asset].name}}</div>
			<core-button class="flex-1">?</core-button>
			<core-button class="flex-1" color="red">x</core-button>
		</div>
		<!-- https://projects.invisionapp.com/d/main#/console/9394408/237051717/preview -->

		<select
			v-if="value.length < 3"
			class="bg-grey p-3 text-white"
			@input="updateValue($event.target.value)"
		>
			<option>- -</option>
			<option
				v-for="(option, key) in fightingArts"
				v-if="value.indexOf(key) === -1"
				:key="key"
				:value="key"
			>{{option.name}}</option>
		</select>
	</div>
</template>

<script>
import fightingArts from '@/assets/game/fightingArts.js';
import CoreButton from '@/components/CoreButton/CoreButton';

export default {
	components: { CoreButton },
	props: {
		value: {
			type: Array,
			required: true
		},
		attribute: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			fightingArts
		};
	},
	methods: {
		updateValue(value) {
			this.$emit('input', [...this.value, value]);
		}
	}
};
</script>
