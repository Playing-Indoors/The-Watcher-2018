<docs>

	wrapper - handles popup logic
		title
		display slot
		popup slot
		saves obj
		reset obj




</docs>

<template>
	<div>
		<top-bar>
			{{survivor.name}}
			<router-link
				slot="left"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
				:to="{ name: 'Settlement' }"
			>
				&lt;
			</router-link>
		</top-bar>
		<layout-grid>
			<div v-if="hunting" class="span-6">
				<h2>Hunting Party</h2>
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
			<single-attribute
				v-model="survivor.survival"
				attribute="survival"
				name="Survival"
				:saveAttributes="saveAttributes"
				class="span-2"
			/>
			<single-attribute
				v-model="survivor.bleeding"
				attribute="bleeding"
				name="Bleeding"
				:saveAttributes="saveAttributes"
				class="span-2"
			/>
			<single-attribute
				v-model="survivor.huntXP"
				attribute="huntXP"
				name="Hunt XP"
				:saveAttributes="saveAttributes"
				class="span-2"
			/>
			<single-attribute
				v-model="survivor.courage"
				attribute="courage"
				name="Courage"
				:saveAttributes="saveAttributes"
				class="span-2"
			/>
			<single-attribute
				v-model="survivor.understanding"
				attribute="understanding"
				name="Understanding"
				:saveAttributes="saveAttributes"
				class="span-2"
			/>
			<single-attribute
				v-model="survivor.weaponXP"
				attribute="weaponXP"
				name="Weapon Proficiency"
				:saveAttributes="saveAttributes"
				class="span-2"
			/>
			<custom-attribute
				:attributes="stats"
				name="Stats"
				:saveAttributes="saveAttributes"
				class="span-6"
			/>
			<box-widget name="Armor" class="span-6">
				<stat-number name="Insanity" :number="survivor.insanity" />
				<stat-number name="Head" :number="survivor.head" />
				<stat-number name="Arms" :number="survivor.arms" />
				<stat-number name="Body" :number="survivor.body" />
				<stat-number name="Waist" :number="survivor.waist" />
				<stat-number name="Legs" :number="survivor.legs" />
			</box-widget>
			<box-widget name="Fighting Arts" class="span-6">
				None
			</box-widget>
			<box-widget name="Disorders" class="span-6">
				None
			</box-widget>
			<box-widget name="Abilities" class="span-6">
				None
			</box-widget>

			<div class="span-6">
				<input type="text" v-model="survivor.name" />
				<button type="submit" @click="handleSave">Save</button>
			</div>
		</layout-grid>
  </div>
</template>

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import BoxWidget from '@/components/BoxWidget';
import SingleAttribute from '@/components/SingleAttribute';
import CustomAttribute from '@/components/CustomAttribute';
import StatNumber from '@/components/StatNumber';
import StatAdjust from '@/components/StatAdjust';
import StatAdjust2 from '@/components/StatAdjust2';
import SurvivorCard from '@/components/SurvivorCard';
import CoreButton from '@/components/CoreButton/CoreButton';

export default {
	components: {
		TopBar,
		LayoutGrid,
		BoxWidget,
		CoreButton,
		SingleAttribute,
		CustomAttribute,
		StatNumber,
		StatAdjust,
		StatAdjust2,
		SurvivorCard,
	},
	props: {
		survivorId: {
			type: String,
			required: true,
		},
		settlementId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			hunting: [],
			survivor: {},
			survivors: [],
		};
	},
	computed: {
		stats() {
			return [
				{
					name: 'Movement',
					value: this.survivor.movement,
				},
				{
					name: 'Accuracy',
					value: this.survivor.accuracy,
				},
				{
					name: 'Strength',
					value: this.survivor.strength,
				},
				{
					name: 'Evasion',
					value: this.survivor.evasion,
				},
				{
					name: 'Luck',
					value: this.survivor.luck,
				},
				{
					name: 'Speed',
					value: this.survivor.speed,
				},
			];
		},
	},
	firestore() {
		return {
			survivor: db.doc(
				`settlements/${this.settlementId}/survivors/${this.survivorId}`,
			),
			hunting: db.collection(`settlements/${this.settlementId}/hunting`),
			survivors: db.collection(`settlements/${this.settlementId}/survivors`),
		};
	},
	beforeRouteUpdate(to, from, next) {
		this.$bind(
			'survivor',
			db.doc(
				`settlements/${this.settlementId}/survivors/${to.params.survivorId}`,
			),
		);
		next();
	},
	methods: {
		huntedLookup(id) {
			return this.survivors.find(survivor => survivor.id === id);
		},
		removeHunted(id) {
			db.doc(`settlements/${this.settlementId}/hunting/${id}`).delete();
		},
		handleSave() {
			this.$firestoreRefs.survivor
				.update({
					name: this.survivor.name,
				})
				.then(res => console.log(res));
		},
		saveAttributes(obj) {
			console.log('saving', obj);
			this.$firestoreRefs.survivor
				.update(obj)
				.then(res => console.log('saved', res));
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
