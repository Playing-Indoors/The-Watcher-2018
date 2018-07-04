<template>
	<div v-if="settlement">
		<top-bar>
			{{settlement.name}}'s Survivors
			<router-link
				slot="left"
				:to="{ name: 'Settlements' }"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
			>
				&lt;
			</router-link>
			<router-link
				slot="right"
				:to="{ name: 'Survivor-New' }"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
			>
				+
			</router-link>
		</top-bar>
		<div class="bg-black flex text-xxs text-center">
			<router-link
				:to="{ name: 'Settlement' }"
				class="flex-auto no-underline text-grey p-1 border-b-2 border-grey-dark hover:text-yellow"
				active-class="text-yellow border-yellow"
				exact
			>Alive</router-link>
			<router-link
				:to="{ name: 'SettlementDead' }"
				class="flex-auto no-underline text-grey p-1 border-b-2 border-grey-dark hover:text-yellow"
				active-class="text-yellow border-yellow"
			>Dead</router-link>
			<router-link
				:to="{ name: 'SettlementHunt' }"
				class="flex-auto no-underline text-grey p-1 border-b-2 border-grey-dark hover:text-yellow"
				active-class="text-yellow border-yellow"
			>The Hunt</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';

export default {
	components: {
		TopBar,
		LayoutGrid
	},
	props: {
		settlementId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			settlement: null,
			survivors: []
		};
	},
	firestore() {
		return {
			settlement: db.collection('settlements').doc(this.settlementId),
			survivors: db.collection(`settlements/${this.settlementId}/survivors`)
		};
	}
};
</script>
