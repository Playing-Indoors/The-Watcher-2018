<template>
	<layout-grid :columns="1">
		<label class="block pb-1 text-xs">Head</label>
		<div
			v-for="(injury, index) in head"
			:key="index"
			class="flex items-center"
		>
			<label class="flex-1 text-xxs text-grey-light">{{injury.name}}</label>
			<button
				v-for="(value, index) in injury.values"
				:key="index"
				type="button"
				class="w-4 h-4 block bg-grey rounded-full shadow ml-2"
			></button>
		</div>
	</layout-grid>
</template>

<script>
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import CheckboxMultiple from '@/components/CheckboxMultiple/CheckboxMultiple';

export default {
	components: {
		LayoutGrid,
		CheckboxMultiple
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
	},
	data() {
		return {
			head: [
				{
					name: 'Intracranial Hemorrhage',
					count: 1,
					values: [false]
				},
				{
					name: 'Deaf',
					count: 1,
					values: [false]
				},
				{
					name: 'Blind',
					count: 2,
					values: [true, false]
				},
				{
					name: 'Shattered Jaw',
					count: 2,
					values: [true, false]
				}
			]
		};
	}
};
</script>
