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
		<layout-grid contents :columns="1">
			<div>
				<h1>The Hunt</h1>
				<core-select
					label="Choose survivor to add to the hunt"
					placeholder="- -"
					:options="survivors"
					optionKey="id"
					optionText="name"
					@input="addToHunt"
				/>
				<div
					v-for="survivor in hunting"
					:key="survivor.id"
				>
					<survivor-card
						v-if="huntedLookup(survivor.survivorId)"
						:survivor="huntedLookup(survivor.survivorId)"
					/>
					<core-button color="red" class="text-sm" @click="removeHunted(survivor.id)">Remove</core-button>
				</div>

			</div>
			<div>
				<h1>Survivors</h1>
			</div>
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
