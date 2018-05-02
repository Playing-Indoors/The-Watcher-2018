<docs>
	wrapper - handles popup logic
		title
		display slot
		popup slot
		saves obj
		reset obj
</docs>

<template>
	<layout-grid>
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
			<!-- {{fightingArts}} -->
		</box-widget>
		<box-widget name="Disorders" class="span-6">
			None
		</box-widget>
		<box-widget name="Abilities" class="span-6">
			None
		</box-widget>
		<!-- <div class="span-6">
			<input type="text" v-model="survivor.name" />
			<button type="submit" @click="handleSave">Save</button>
		</div> -->
	</layout-grid>
</template>

<script>
import fightingArts from '@/assets/game/fightingArts';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import BoxWidget from '@/components/BoxWidget';
import SingleAttribute from '@/components/SingleAttribute';
import CustomAttribute from '@/components/CustomAttribute';
import StatNumber from '@/components/StatNumber';
import StatAdjust from '@/components/StatAdjust';
import StatAdjust2 from '@/components/StatAdjust2';

export default {
	components: {
		LayoutGrid,
		BoxWidget,
		SingleAttribute,
		CustomAttribute,
		StatNumber,
		StatAdjust,
		StatAdjust2
	},
	props: {
		survivor: {
			type: Object,
			required: true
		},
		saveAttributes: {
			type: Function,
			default: () => {}
		}
	},
	data() {
		return {
			fightingArts: fightingArts
		};
	},
	computed: {
		stats() {
			return [
				{
					name: 'Movement',
					value: this.survivor.movement
				},
				{
					name: 'Accuracy',
					value: this.survivor.accuracy
				},
				{
					name: 'Strength',
					value: this.survivor.strength
				},
				{
					name: 'Evasion',
					value: this.survivor.evasion
				},
				{
					name: 'Luck',
					value: this.survivor.luck
				},
				{
					name: 'Speed',
					value: this.survivor.speed
				}
			];
		}
	}
};
</script>
