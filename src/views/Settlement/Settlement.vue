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
import CoreSelect from '@/components/CoreSelect/CoreSelect';
import CoreButton from '@/components/CoreButton/CoreButton';
import SurvivorCard from '@/components/SurvivorCard';

export default {
	components: {
		TopBar,
		LayoutGrid,
		CoreSelect,
		CoreButton,
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
			settlement: null,
			huntSelect: null,
			hunting: [],
			survivors: []
		};
	},
	firestore() {
		return {
			settlement: db.collection('settlements').doc(this.settlementId),
			survivors: db.collection(`settlements/${this.settlementId}/survivors`),
			hunting: db.collection(`settlements/${this.settlementId}/hunting`)
		};
	},
	methods: {
		addToHunt(id) {
			if (id && !this.hunting.find(survivor => survivor.survivorId === id)) {
				db
					.collection(`settlements/${this.settlementId}/hunting`)
					.add({ survivorId: id });
			}
		},
		removeHunted(id) {
			db.doc(`settlements/${this.settlementId}/hunting/${id}`).delete();
		},
		huntedLookup(id) {
			return this.survivors.find(survivor => survivor.id === id);
		},
		handleSave() {
			db
				.collection('settlements')
				.doc(this.settlementId)
				.update({
					name: this.settlement.name
				})
				.then(res => {
					console.log('UPDATED', res);
					// this.$router.push({
					// 	name: 'SettlementsEdit',
					// 	params: { settlementId: res.id },
					// });
				})
				.catch(err => console.error(err));
		}
	}
};
</script>

<style lang="scss" module>
.layout {
	display: grid;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: repeat(6, 1fr);

	> * {
		grid-column-end: span 2;
	}
}
</style>
