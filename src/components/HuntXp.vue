<template>
	<box-widget
		name="Hunt XP"
		:value="obj"
		:resetData="resetData"
		:saveData="saveData"
	>
		<stat-number :number="value" />
		<stat-adjust
			slot="modal"
			v-model="tempValue"
		/>
	</box-widget>
</template>

<script>
import BoxWidget from '@/components/BoxWidget2';
import StatAdjust from '@/components/StatAdjust2';
import StatNumber from '@/components/StatNumber';

export default {
	components: { BoxWidget, StatAdjust, StatNumber },
	props: {
		value: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			tempValue: this.value,
		};
	},
	computed: {
		obj() {
			return {
				huntXP: this.tempValue,
			};
		},
	},
	methods: {
		saveData() {
			this.$emit('input', this.tempValue);
		},
		resetData() {
			this.tempValue = this.value;
		},
	},
};
</script>
