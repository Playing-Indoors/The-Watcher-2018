<template>
	<box-widget
		:name="name"
		:dirty="dirty"
		@confirm="handleConfirm()"
		@cancel="handleCancel()"
	>
		<stat-number :number="value" />
		<stat-adjust
			slot="modal"
			v-model="tempValue"
			:max="max"
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
		name: {
			type: String,
			default: ''
		},
		value: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 0
		},
		attribute: {
			type: String,
			required: true
		},
		saveAttributes: {
			type: Function,
			default: () => {}
		}
	},
	data() {
		return {
			tempValue: this.value
		};
	},
	computed: {
		dirty() {
			return this.tempValue !== this.value;
		}
	},
	watch: {
		value(newVal) {
			this.tempValue = newVal;
		}
	},
	methods: {
		handleConfirm() {
			this.$emit('input', this.tempValue);
			const obj = {};
			obj[this.attribute] = this.tempValue;
			this.saveAttributes(obj);
		},
		handleCancel() {
			this.tempValue = this.value;
		}
	}
};
</script>
