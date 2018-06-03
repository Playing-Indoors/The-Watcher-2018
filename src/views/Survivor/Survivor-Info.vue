<template>
	<layout-grid :columns="1">
		<core-input
			v-model="name"
			label="Name"
			required
		/>
		<core-select
			v-model="gender"
			:options="['Male', 'Female']"
			label="Gender"
		/>
		<core-input
			v-model="notes"
			label="Notes"
		/>
		<core-button submit @click="save">Save</core-button>
		<div>Log:</div>
	</layout-grid>
</template>

<script>
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import CoreInput from '@/components/CoreInput/CoreInput';
import CoreSelect from '@/components/CoreSelect/CoreSelect';
import CoreButton from '@/components/CoreButton/CoreButton';

export default {
	components: {
		LayoutGrid,
		CoreInput,
		CoreSelect,
		CoreButton
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
			name: this.survivor.name,
			gender: this.survivor.gender,
			notes: this.survivor.notes
		};
	},
	watch: {
		survivor(survivor) {
			this.name = survivor.name;
			this.gender = survivor.gender;
			this.notes = survivor.notes;
		}
	},
	methods: {
		save() {
			this.saveAttributes({
				name: this.name,
				gender: this.gender,
				notes: this.notes
			});
		}
	}
};
</script>
