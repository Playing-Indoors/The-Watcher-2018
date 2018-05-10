<template>
	<box-widget
		:name="name"
		:dirty="dirty"
		@confirm="handleConfirm()"
		@cancel="handleCancel()"
	>
		{{value}} - -
		<!-- <asset-render
			:list="value"
		/> -->
		<asset-adjust
			slot="modal"
			:attribute="attribute"
			v-model="tempValue"
		/>

	</box-widget>
</template>

<script>
import fightingArts from '@/assets/game/fightingArts.js';
import BoxWidget from '@/components/BoxWidget2';
import AssetAdjust from '@/components/AssetAdjust';
import AssetRender from '@/components/AssetRender';

export default {
	components: { BoxWidget, AssetAdjust, AssetRender },
	props: {
		name: {
			type: String
		},
		value: {
			type: Array,
			default: () => []
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
			fightingArts,
			tempValue: this.value
		};
	},
	watch: {
		value(newVal) {
			this.tempValue = newVal;
		}
	},
	computed: {
		dirty() {
			return this.tempValue !== this.value;
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
