<template>
  <form @submit.prevent="handleCreate(name, gender)">
    <h1>Add Survivor</h1>
		Name:
		<input type="text" v-model="name" />
		Gender
		<select v-model="gender">
			<option>Male</option>
			<option>Female</option>
		</select>
		<button type="submit" class="bg-yellow">Create</button>
  </form>
</template>

<script>
import db from '@/firebase';

export default {
	props: {
		settlementId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			name: 'Test Name',
			gender: 'Male',
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
			};

			db
				.collection(`settlements/${this.settlementId}/survivors`)
				.add(newSurvivor)
				.then(res => {
					console.log('CREATED', res);
					this.$router.push({
						name: 'Survivor',
						params: { survivorId: res.id },
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
		},
	},
};
</script>
