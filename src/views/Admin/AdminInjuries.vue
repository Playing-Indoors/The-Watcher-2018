<template>
  <div>
    <top-bar>
      Admin Severe Injuries
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
        <!-- <core-input
					v-model="name"
					label="Name"
					required
				/>
				<core-input
					v-model="description"
					label="Description"
				/> -->
        <!-- <core-button submit>Create</core-button> -->
        <!-- <core-button @click="rebuildCollection()">rebuild</core-button> -->
        <core-button @click="rebuildDoc()">Reimport</core-button>
      </form>
    </layout-grid>
  </div>
</template>

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import CoreInput from '@/components/CoreInput/CoreInput';
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
		CoreInput,
		CoreButton
	},
	// firestore() {
	// 	return {
	// 		injuries: db
	// 			.collection('assets/rules/severe-injuries')
	// 			.orderBy('name', 'desc')
	// 	};
	// },
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
			// db
			// 	.collection('assets/rules/severe-injuries')
			// 	.add({ ...injuries[0] })
			// 	.then(docRef => {
			// 		console.log('Document written with ID: ', docRef.id);
			// 	})
			// 	.catch(error => {
			// 		console.error('Error adding document: ', error);
			// 	});
		},
		// rebuildCollection() {
		// 	console.log(injuries);
		// 	const batch = db.batch();
		// 	const ref = db.collection('assets/rules/severe-injuries');
		// 	Object.entries(injuries).forEach(injury => {
		// 		const key = injury[0];
		// 		const data = injury[1];
		// 		console.log(`Adding ${key}`, data);
		// 		batch.set(ref.doc(key), data);
		// 	});
		// 	batch.commit().then(res => console.log('success', res));
		// db
		// 	.collection('assets/rules/severe-injuries')
		// 	.add({ ...injuries[0] })
		// 	.then(docRef => {
		// 		console.log('Document written with ID: ', docRef.id);
		// 	})
		// 	.catch(error => {
		// 		console.error('Error adding document: ', error);
		// 	});
		// },
		handleCreate() {
			// db
			// 	.collection('assets/rules/severe-injuries')
			// 	.doc('testid')
			// 	.set({
			// 		name: this.name,
			// 		description: this.description
			// 	})
			// 	.then(docRef => {
			// 		console.log('Document written with ID: ', docRef);
			// 	})
			// 	.catch(error => {
			// 		console.error('Error adding document: ', error);
			// 	});
		}
	}
};
</script>
