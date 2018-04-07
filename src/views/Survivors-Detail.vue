<docs>

	wrapper - handles popup logic
		title
		display slot
		popup slot

	stat-horizontal
		value
		milestone

	stat-vertical
		value
		?label
		?milestone




</docs>

<template>
  <div
		v-if="survivor"
		class="p-4 relative"
		:class="$style.layout"
	>
    <h1 class="span-6 text-center">{{survivor.name}}</h1>
		<box-widget name="Survival" stat="survival">
			<stat-number horizontal :number="survivor.survival" />
			<stat-adjust
				slot="modal"
				stat="survival"
				slot-scope="{item, updateTempObject}"
				:item="item"
				:updateTempObject="updateTempObject"
				v-model="survivor.survival"
			/>
		</box-widget>
		<box-widget name="Bleeding">
			<stat-number horizontal :number="survivor.bleeding" />
		</box-widget>
		<box-widget name="Hunt XP">
			<stat-number horizontal :number="survivor.huntXP" />
		</box-widget>
		<box-widget name="Courage">
			<stat-number horizontal :number="survivor.courage" />
		</box-widget>
		<box-widget name="Understanding">
			<stat-number horizontal :number="survivor.Understanding" />
		</box-widget>
		<box-widget name="Weapon Proficiency">
			<stat-number horizontal :number="survivor.weaponXP" />
		</box-widget>
		<box-widget name="Stats" class="span-6">
			<stat-number name="Movement" :number="survivor.movement" />
			<stat-number name="Accuracy" :number="survivor.accuracy" />
			<stat-number name="Strength" :number="survivor.strength" />
			<stat-number name="Evasion" :number="survivor.evasion" />
			<stat-number name="Luck" :number="survivor.luck" />
			<stat-number name="Speed" :number="survivor.speed" />
		</box-widget>
		<box-widget name="Armor" class="span-6" v-if="survivor.armor">
			<stat-number name="Insanity" :number="survivor.armor.insanity" />
			<stat-number name="Head" :number="survivor.armor.head" />
			<stat-number name="Arms" :number="survivor.armor.arms" />
			<stat-number name="Body" :number="survivor.armor.body" />
			<stat-number name="Waist" :number="survivor.armor.waist" />
			<stat-number name="Legs" :number="survivor.armor.legs" />
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

		<input type="text" v-model="survivor.name" />
		<button type="submit" @click="handleSave">Save</button>
  </div>
</template>

<script>
import db from '@/firebase';
import BoxWidget from '@/components/BoxWidget';
import StatNumber from '@/components/StatNumber';
import StatAdjust from '@/components/StatAdjust';

export default {
	components: {
		BoxWidget,
		StatNumber,
		StatAdjust,
	},
	props: {
		id: {
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
			survivor: db.collection('survivors').doc(this.id),
		};
	},
	methods: {
		handleSave() {
			db
				.collection('survivors')
				.doc(this.id)
				.update({
					name: this.survivor.name,
				});
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
