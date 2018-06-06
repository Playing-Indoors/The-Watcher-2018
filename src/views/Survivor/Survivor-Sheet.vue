<template>
	<layout-grid>
		<single-attribute
			v-model="survivor.survival"
			:save-attributes="saveAttributes"
			attribute="survival"
			name="Survival"
			class="span-2"
		/>
		<single-attribute
			v-model="survivor.bleeding"
			:save-attributes="saveAttributes"
			attribute="bleeding"
			name="Bleeding"
			class="span-2"
		/>
		<single-attribute
			v-model="survivor.huntXP"
			:save-attributes="saveAttributes"
			:max="15"
			attribute="huntXP"
			name="Hunt XP"
			class="span-2"
		/>
		<single-attribute
			v-model="survivor.courage"
			:save-attributes="saveAttributes"
			:max="9"
			attribute="courage"
			name="Courage"
			class="span-2"
		/>
		<single-attribute
			v-model="survivor.understanding"
			:save-attributes="saveAttributes"
			:max="9"
			attribute="understanding"
			name="Understanding"
			class="span-2"
		/>
		<single-attribute
			v-model="survivor.weaponXP"
			:save-attributes="saveAttributes"
			:max="8"
			attribute="weaponXP"
			name="Weapon Proficiency"
			class="span-2"
		/>
		<!-- <custom-attribute
      :attributes="stats"
      :save-attributes="saveAttributes"
      name="Stats"
      class="span-6"
    /> -->
		<!-- <box-widget name="Armor" class="span-6">
      <stat-number :number="survivor.insanity" name="Insanity" />
      <stat-number :number="survivor.head" name="Head" />
      <stat-number :number="survivor.arms" name="Arms" />
      <stat-number :number="survivor.body" name="Body" />
      <stat-number :number="survivor.waist" name="Waist" />
      <stat-number :number="survivor.legs" name="Legs" />
    </box-widget> -->
		<!-- <test-popup /> -->
		<test-popup
			title="Courage"
			class="span-2"
		>
			<div slot="display">
				<stat-number :number="0" />
			</div>
		</test-popup>
		<test-popup
			title="Courage"
			class="span-6"
		>
			<template slot="display">
				<stat-number :number="survivor.movement" name="Mov" />
				<stat-number :number="survivor.accuracy" name="Acc" />
				<stat-number :number="survivor.strength" name="Str" />
				<stat-number :number="survivor.evasion" name="Eva" />
				<stat-number :number="survivor.luck" name="Luck" />
				<stat-number :number="survivor.speed" name="Spd" />
			</template>
			<div slot="popup">
				Mov
				Acc
				Str
				Eva
				Luck
				Spd
			</div>
		</test-popup>
		<asset-attribute
			v-model="survivor.fightingArts"
			:max="3"
			:save-attributes="saveAttributes"
			attribute="fightingArts"
			name="Fighting Arts"
			class="span-6"
		/>
		<asset-attribute
			v-model="survivor.disorders"
			:max="3"
			:save-attributes="saveAttributes"
			attribute="disorders"
			name="Disorders"
			class="span-6"
		/>
		<asset-attribute
			v-model="survivor.abilities"
			:save-attributes="saveAttributes"
			attribute="abilities"
			name="Abilities"
			class="span-6"
		/>
		<asset-attribute
			v-model="survivor.impairments"
			:save-attributes="saveAttributes"
			attribute="impairments"
			name="Impairments"
			class="span-6"
		/>
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
import AssetAttribute from '@/components/AssetAttribute';
import CustomAttribute from '@/components/CustomAttribute';
import StatNumber from '@/components/StatNumber';
import StatAdjust from '@/components/StatAdjust';
import StatAdjust2 from '@/components/StatAdjust2';
import TestPopup from '@/components/TestPopup';

export default {
	components: {
		LayoutGrid,
		BoxWidget,
		AssetAttribute,
		SingleAttribute,
		CustomAttribute,
		StatNumber,
		StatAdjust,
		StatAdjust2,
		TestPopup
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
