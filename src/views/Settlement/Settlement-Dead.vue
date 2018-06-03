<template>
	<div>Coming soon</div>
</template>

<script>
import db from '@/firebase';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import SurvivorCard from '@/components/SurvivorCard';

export default {
	components: {
		LayoutGrid,
		SurvivorCard
	},
	props: {
		settlementId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			survivors: []
		};
	},
	firestore() {
		return {
			survivors: db.collection(`settlements/${this.settlementId}/survivors`)
		};
	}
};
</script>
