<template>
	<form @submit.prevent="handleCreate(name, gender)">
		<h1>Add Survivor</h1>
		Name:
		<input v-model="name" type="text" >
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
	data() {
		return {
			name: '',
			gender: ''
		};
	},
	methods: {
		handleCreate(name, gender) {
			const createdAt = new Date();
			db.collection('survivors').add({
				name,
				gender,
				createdAt,
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
				armor: {
					insanity: 0,
					head: 0,
					arms: 0,
					body: 0,
					waist: 0,
					legs: 0
				}
			});
			this.name = '';
			this.gender = '';
		}
	}
};
</script>
