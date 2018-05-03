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

import injuries from './AdminInjuries.data.js';

export default {
	components: {
		TopBar,
		LayoutGrid,
		CoreInput,
		CoreButton
	},
	firestore() {
		return {
			injuries: db
				.collection('assets/rules/severe-injuries')
				.orderBy('name', 'desc')
		};
	},
	data() {
		return {
			injuries: [],
			name: '',
			description: ''
		};
	},
	methods: {
		rebuildCollection() {
			console.log(injuries);
			db
				.collection('assets/rules/severe-injuries')
				.add({ ...injuries[0] })
				.then(docRef => {
					console.log('Document written with ID: ', docRef.id);
				})
				.catch(error => {
					console.error('Error adding document: ', error);
				});
		},
		handleCreate() {
			db
				.collection('assets/rules/severe-injuries')
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
