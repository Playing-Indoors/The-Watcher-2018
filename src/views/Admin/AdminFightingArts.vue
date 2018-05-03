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

import fightingArts from '@/assets/game/fightingArts.js';

export default {
	components: {
		TopBar,
		LayoutGrid,
		CoreInput,
		CoreButton
	},
	firestore() {
		return {
			fightingArts: db.collection('assets/rules/fighting-arts')
		};
	},
	data() {
		return {
			fightingArts: [],
			name: '',
			description: ''
		};
	},
	methods: {
		rebuildCollection() {
			console.log(fightingArts);
			db
				.collection('assets/rules/fighting-arts')
				.add({ ...fightingArts })
				.then(docRef => {
					console.log('Document written with ID: ', docRef.id);
				})
				.catch(error => {
					console.error('Error adding document: ', error);
				});
		},
		handleCreate() {
			db
				.collection('assets/rules/fighting-arts')
				.add({
					name: this.name,
					description: this.description
				})
				.then(docRef => {
					console.log('Document written with ID: ', docRef.id);
				})
				.catch(error => {
					console.error('Error adding document: ', error);
				});
		}
	}
};
</script>
