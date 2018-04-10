<template>
  <div>
		<top-bar>
			Settlements
			<router-link
				slot="right"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
				:to="{ name: 'Settlements-New' }"
			>
				+
			</router-link>
		</top-bar>
		<layout-grid class="grid-contents">
			<transition-group tag="div" name="transition-list">
				<router-link
					v-for="settlement in settlements"
					:key="settlement.id"
					:to="{
						name: 'Settlement',
						params: {
							settlementId: settlement.id
						}
					}"
					class="shadow hover:shadow-lg bg-grey-dark span-6 p-4 flex w-full text-white no-underline"
				>
					<div class="flex-1">
						<div>{{settlement.name}}</div>
						<div class="text-grey text-xs">Last Accessed*: {{settlement.dateModified}}</div>
						<div class="text-grey text-xs">Created On: {{settlement.dateCreated}}</div>
					</div>
					<div class="text-grey text-xs">
						Population*: <span class="text-white">{{settlement.population}}</span>
					</div>
				</router-link>
			</transition-group>
		</layout-grid>
  </div>
</template>

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';

export default {
	components: {
		TopBar,
		LayoutGrid,
	},
	data() {
		return {
			settlements: [],
		};
	},
	firestore() {
		return {
			settlements: db.collection('settlements').orderBy('dateModified', 'desc'),
			// settlements: db.collection('settlements'),
		};
	},
};
</script>

<style lang="scss">

</style>
