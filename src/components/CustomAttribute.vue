<template>
  <box-widget
    :name="name"
    :dirty="dirty"
    @confirm="handleConfirm()"
    @cancel="handleCancel()"
  >
    <stat-number
      v-for="attr in attributes"
      :key="attr.name"
      :name="attr.name"
      :number="attr.value"
    />
    <!-- <stat-adjust
			slot="modal"
			v-model="tempValue"
		/> -->
    <div slot="modal">
      <stat-adjust
        v-for="attr in attributes"
        :key="attr.name"
        :name="attr.name"
        v-model="attr.value"
      />
    </div>
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
		attributes: {
			type: Array,
			default: () => []
		},
		saveAttributes: {
			type: Function,
			default: () => {}
		}
	},
	data() {
		return {
			tempValue: []
		};
	},
	computed: {
		dirty() {
			return this.tempValue !== this.value;
		}
	},
	watch: {
		value(newVal) {
			this.cloneAttr(newVal);
		}
	},
	mounted() {
		this.cloneAttr(this.value);
	},
	methods: {
		cloneAttr(value = []) {
			this.tempValue = [...value];
		},
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
