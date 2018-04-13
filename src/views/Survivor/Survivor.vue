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
			<box-widget name="Survival" stat="survival" class="span-2">
				<stat-number :number="survivor.survival" />
				<stat-adjust
					slot="modal"
					slot-scope="{item, updateTempObject}"
					:item="item"
					:updateTempObject="updateTempObject"
					v-model="survivor.survival"
				/>
			</box-widget>
			<box-widget name="Bleeding" class="span-2">
				<stat-number :number="survivor.bleeding" />
				<stat-adjust2
					slot="modal"
					stat="bleeding"
					:value="survivor.survival"
					:saveObj="saveObj"
				/>
			</box-widget>
			<hunt-xp
				v-model="survivor.huntXP"
				class="span-2"
			/>
			<box-widget name="Courage" class="span-2">
				<stat-number :number="survivor.courage" />
			</box-widget>
			<box-widget name="Understanding" class="span-2">
				<stat-number :number="survivor.understanding" />
			</box-widget>
			<box-widget name="Weapon Proficiency" class="span-2">
				<stat-number :number="survivor.weaponXP" />
			</box-widget>
			<box-widget name="Stats" class="span-6">
				<stat-number name="Movement" :number="survivor.movement" />
				<stat-number name="Accuracy" :number="survivor.accuracy" />
				<stat-number name="Strength" :number="survivor.strength" />
				<stat-number name="Evasion" :number="survivor.evasion" />
				<stat-number name="Luck" :number="survivor.luck" />
				<stat-number name="Speed" :number="survivor.speed" />
			</box-widget>
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
import HuntXp from '@/components/HuntXp';
import StatNumber from '@/components/StatNumber';
import StatAdjust from '@/components/StatAdjust';
import StatAdjust2 from '@/components/StatAdjust2';

export default {
	components: {
		TopBar,
		LayoutGrid,
		BoxWidget,
		HuntXp,
		StatNumber,
		StatAdjust,
		StatAdjust2,
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
			survivor: {},
		};
	},
	firestore() {
		return {
			survivor: db.doc(
				`settlements/${this.settlementId}/survivors/${this.survivorId}`,
			),
		};
	},
	methods: {
		handleSave() {
			db
				.doc(`settlements/${this.settlementId}/survivors/${this.survivorId}`)
				.update({
					name: this.survivor.name,
				});
		},
		saveObj(obj) {
			console.log('saving', obj);
			db
				.doc(`settlements/${this.settlementId}/survivors/${this.survivorId}`)
				.update(obj);
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
