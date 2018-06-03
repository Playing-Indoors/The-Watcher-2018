<template>
	<div
		v-if="survivor"
		:class="$style.layout"
		class="p-4 relative"
	>
		<h1 class="span-6 text-center">{{survivor.name}}</h1>
		<box-widget name="Survival" stat="survival">
			<stat-number :number="survivor.survival" horizontal />
			<stat-adjust
				slot="modal"
				slot-scope="{item, updateTempObject}"
				:item="item"
				:update-temp-object="updateTempObject"
				v-model="survivor.survival"
				stat="survival"
			/>
		</box-widget>
		<box-widget name="Bleeding">
			<stat-number :number="survivor.bleeding" horizontal />
		</box-widget>
		<box-widget name="Hunt XP">
			<stat-number :number="survivor.huntXP" horizontal />
		</box-widget>
		<box-widget name="Courage">
			<stat-number :number="survivor.courage" horizontal />
		</box-widget>
		<box-widget name="Understanding">
			<stat-number :number="survivor.Understanding" horizontal />
		</box-widget>
		<box-widget name="Weapon Proficiency">
			<stat-number :number="survivor.weaponXP" horizontal />
		</box-widget>
		<box-widget name="Stats" class="span-6">
			<stat-number :number="survivor.movement" name="Movement" />
			<stat-number :number="survivor.accuracy" name="Accuracy" />
			<stat-number :number="survivor.strength" name="Strength" />
			<stat-number :number="survivor.evasion" name="Evasion" />
			<stat-number :number="survivor.luck" name="Luck" />
			<stat-number :number="survivor.speed" name="Speed" />
		</box-widget>
		<box-widget v-if="survivor.armor" name="Armor" class="span-6">
			<stat-number :number="survivor.armor.insanity" name="Insanity" />
			<stat-number :number="survivor.armor.head" name="Head" />
			<stat-number :number="survivor.armor.arms" name="Arms" />
			<stat-number :number="survivor.armor.body" name="Body" />
			<stat-number :number="survivor.armor.waist" name="Waist" />
			<stat-number :number="survivor.armor.legs" name="Legs" />
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

		<input v-model="survivor.name" type="text" >
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
		StatAdjust
	},
	props: {
		id: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			survivor: {}
		};
	},
	firestore() {
		return {
			survivor: db.collection('survivors').doc(this.id)
		};
	},
	methods: {
		handleSave() {
			db
				.collection('survivors')
				.doc(this.id)
				.update({
					name: this.survivor.name
				});
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
