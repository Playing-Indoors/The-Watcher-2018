<template>
	<div>
		<top-bar>
			Admin Rebuild
		</top-bar>

		<layout-grid :columns="1" contents>
			<form @submit.prevent="handleCreate(name)">
				<select v-model="asset">
					<option value="severeInjuries">Severe Injuries</option>
					<option value="fightingArts">Fighting Arts</option>
					<option value="abilities">Abilities</option>
					<option value="disorders">disorders</option>
					<option value="impairments">impairments</option>
				</select>
				<core-button @click="rebuildDoc()">Reimport</core-button>
			</form>
		</layout-grid>
	</div>
</template>

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import CoreButton from '@/components/CoreButton/CoreButton';

import severeInjuries from '@/assets/game/severeInjuries.js';
import fightingArts from '@/assets/game/fightingArts.js';
import abilities from '@/assets/game/abilitiesGroup.js';
import disorders from '@/assets/game/disorders.js';
import impairments from '@/assets/game/impairmentsGroup.js';

export default {
	components: {
		TopBar,
		LayoutGrid,
		CoreButton
	},
	data() {
		return {
			name: '',
			description: '',
			asset: ''
		};
	},
	methods: {
		rebuildDoc() {
			const assets = {
				fightingArts,
				severeInjuries,
				abilities,
				disorders,
				impairments
			};
			db
				.doc(`assets/${this.asset}`)
				.set({
					...assets[this.asset]
				})
				.then(res => console.log('success', res));
		}
	}
};
</script>
