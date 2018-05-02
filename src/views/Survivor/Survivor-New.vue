<template>
	<div>
		<top-bar>
			Create New Survivor
			<router-link
				slot="left"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
				:to="{ name: 'Settlement' }"
			>
				&lt;
			</router-link>
		</top-bar>

		<layout-grid contents :columns="1">
			<form @submit.prevent="handleCreate(name, gender)">
				<core-input
					v-model="name"
					label="Name"
					autofocus
					required
				/>
				<core-select
					v-model="gender"
					label="Gender"
					:options="['Male', 'Female']"
				/>
				<core-button submit class=" mt-3">Create</core-button>
			</form>
		</layout-grid>
	</div>
</template>

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import CoreInput from '@/components/CoreInput/CoreInput';
import CoreSelect from '@/components/CoreSelect/CoreSelect';
import CoreButton from '@/components/CoreButton/CoreButton';

export default {
	components: {
		TopBar,
		LayoutGrid,
		CoreInput,
		CoreSelect,
		CoreButton
	},
	props: {
		settlementId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			name: 'Test Name',
			gender: 'Male'
		};
	},
	methods: {
		handleCreate(name, gender) {
			const dateNow = new Date();
			const newSurvivor = {
				dateCreated: dateNow,
				dateModified: dateNow,
				name,
				gender,
				survival: 0,
				bleeding: 0,
				huntXP: 0,
				courage: 0,
				understanding: 0,
				weaponXP: 0,
				movement: 0,
				accuracy: 0,
				strength: 0,
				evasion: 0,
				luck: 0,
				speed: 0,
				insanity: 0,
				head: 0,
				arms: 0,
				body: 0,
				waist: 0,
				legs: 0,
				notes: ''
			};

			db
				.collection(`settlements/${this.settlementId}/survivors`)
				.add(newSurvivor)
				.then(res => {
					console.log('CREATED', res);
					this.$router.push({
						name: 'Survivor',
						params: { survivorId: res.id }
					});
				})
				.catch(err => console.error(err));

			/* ATTEMPT TRANSACTION */
			// const refSettlement = db.collection('settlements').doc(this.settlementId);
			// const newSurRef = db
			// 	.collection('settlements')
			// 	.doc(this.settlementId)
			// 	.collection('survivors')
			// 	.doc();
			// return db
			// 	.runTransaction(transaction =>
			// 		transaction.get(refSettlement).then(settlementDoc => {
			// 			const newPopulation = settlementDoc.data().population + 1;
			// 			transaction.update(refSettlement, {
			// 				population: newPopulation,
			// 				dateModified: dateNow,
			// 			});
			// 			return transaction.set(newSurRef, newSurvivor);
			// 		}),
			// 	)
			// 	.then(res => {
			// 		console.log('CREATED', res);
			// 		this.$router.push({
			// 			name: 'Survivor-Manage',
			// 			params: { survivorId: res.id },
			// 		});
			// 	})
			// 	.catch(err => console.error(err));
		}
	}
};
</script>
