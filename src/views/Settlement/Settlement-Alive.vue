<template>
	<div v-if="survivors">
		<layout-grid contents :columns="1">
			<div v-if="survivors && survivors.length === 0">
				<div class="bg-red p-4">Sorry no survivors</div>
			</div>
			<transition-group tag="div" name="transition-list">
				<survivor-card
					v-for="survivor in survivors"
					:key="survivor.id"
					:survivor="survivor"
				/>
			</transition-group>
		</layout-grid>
  </div>
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
