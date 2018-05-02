<template>
	<layout-grid>
		INJURIES
	</layout-grid>
</template>

<script>
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import BoxWidget from '@/components/BoxWidget';
import SingleAttribute from '@/components/SingleAttribute';
import CustomAttribute from '@/components/CustomAttribute';
import StatNumber from '@/components/StatNumber';
import StatAdjust from '@/components/StatAdjust';
import StatAdjust2 from '@/components/StatAdjust2';

export default {
	components: {
		LayoutGrid,
		BoxWidget,
		SingleAttribute,
		CustomAttribute,
		StatNumber,
		StatAdjust,
		StatAdjust2
	},
	props: {
		survivor: {
			type: Object,
			required: true
		},
		saveAttributes: {
			type: Function,
			default: () => {}
		}
	}
};
</script>
