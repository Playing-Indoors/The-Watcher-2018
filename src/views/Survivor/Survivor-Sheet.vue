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
import SingleAttribute from '@/components/SingleAttribute/SingleAttribute';
import AssetAttribute from '@/components/AssetAttribute/AssetAttribute';

export default {
	components: {
		LayoutGrid,
		AssetAttribute,
		SingleAttribute
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
