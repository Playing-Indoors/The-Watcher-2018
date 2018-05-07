<template>
	<div>
		<top-bar>
			Admin Severe Injuries
		</top-bar>

		<layout-grid contents :columns="1">
			<form @submit.prevent="handleCreate(name)">
				<core-input
					v-model="name"
					label="Name"
					required
				/>
				<core-input
					v-model="description"
					label="Description"
				/>
				<core-button submit>Create</core-button>
				<core-button @click="rebuildCollection()">rebuild</core-button>
				<core-button @click="rebuildDoc()">doc</core-button>
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

import injuries from './AdminInjuries.data.js';

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
			description: ''
		};
	},
	methods: {
		rebuildDoc() {
			console.log(injuries);
			db.doc('assets/severe-injuries').set({
				...injuries
			});
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
		rebuildCollection() {
			console.log(injuries);
			const batch = db.batch();
			const ref = db.collection('assets/rules/severe-injuries');
			Object.entries(injuries).forEach(injury => {
				const key = injury[0];
				const data = injury[1];
				console.log(`Adding ${key}`, data);
				batch.set(ref.doc(key), data);
			});
			batch.commit().then(res => console.log('success', res));
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
