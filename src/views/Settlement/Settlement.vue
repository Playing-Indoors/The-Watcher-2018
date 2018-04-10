<docs>
</docs>

<template>
	<div v-if="settlement">
		<top-bar>
			{{settlement.name}}'s Survivors
			<router-link
				slot="left"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
				:to="{ name: 'Settlements' }"
			>
				&lt;
			</router-link>
			<router-link
				slot="right"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
				:to="{ name: 'Survivor-New' }"
			>
				+
			</router-link>
		</top-bar>
		<layout-grid class="grid-contents">
			<!-- <div v-if="survivors && survivors.length === 0">
				<div class="bg-red p-4 span-6">Sorry no survivors</div>
			</div> -->
			<transition-group tag="div" name="transition-list">
				<router-link
					v-for="survivor in survivors"
					:key="survivor.id"
					:to="{
						name: 'Survivor',
						params: {
							survivorId: survivor.id
						}
					}"
					class="shadow hover:shadow-lg bg-grey-dark span-6 p-4 flex w-full text-white no-underline"
				>
					<div class="flex-1">
						<div>{{survivor.name}}</div>
						<div class="text-grey text-xs">Last Accessed*: {{survivor.dateModified}}</div>
						<div class="text-grey text-xs">Created On: {{survivor.dateCreated}}</div>
					</div>
					<div class="text-grey text-xs">
						Stat*: <span class="text-white">0</span>
					</div>
				</router-link>
			</transition-group>
		</layout-grid>
  </div>
</template>

		<!-- <br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<div class="span-6 border-t pt-4 text-center">edits</div>
		<div class="span-6">
			Name:
			<input type="text" v-model="settlement.name" />
			<br />
			<div>Created: {{settlement.dateCreated}}</div>
			<div>Modified: {{settlement.dateModified}}</div>
			<div>Population: {{settlement.population}}</div>
			<button type="submit" class="bg-yellow" @click="handleSave">Save</button>
		</div>
  </div> -->

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';

export default {
	components: {
		TopBar,
		LayoutGrid,
	},
	props: {
		settlementId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			settlement: null,
			survivors: [],
		};
	},
	firestore() {
		return {
			settlement: db.collection('settlements').doc(this.settlementId),
			survivors: db
				.collection('settlements')
				.doc(this.settlementId)
				.collection('survivors'),
		};
	},
	methods: {
		handleSave() {
			db
				.collection('settlements')
				.doc(this.settlementId)
				.update({
					name: this.settlement.name,
				})
				.then(res => {
					console.log('UPDATED', res);
					// this.$router.push({
					// 	name: 'SettlementsEdit',
					// 	params: { settlementId: res.id },
					// });
				})
				.catch(err => console.error(err));
		},
	},
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
