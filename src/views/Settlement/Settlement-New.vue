<template>
	<div>
    <h1>
			New Settlement
		</h1>
		<form @submit.prevent="handleCreate(name)">
			Name:
			<input type="text" v-model="name" />
			<button type="submit" class="bg-yellow">Create</button>
		</form>
	</div>
</template>

<script>
import db from '@/firebase';

export default {
	data() {
		return {
			name: '',
			// campaign: null,
			// campaigns: {
			// 	people_of_the_lantern: {
			// 		name: 'People of the Lantern',
			// 	},
			// 	people_of_the_skull: {
			// 		name: 'People of the Skull',
			// 	},
			// 	people_of_the_stars: {
			// 		name: 'People of the Stars',
			// 	},
			// 	people_of_the_sun: {
			// 		name: 'People of the Sun',
			// 	},
			// 	the_bloom_people: {
			// 		name: 'The Bloom People',
			// 	},
			// 	the_green_knight: {
			// 		name: 'The Green Knight',
			// 	},
			// },
		};
	},
	methods: {
		handleCreate(name) {
			const dateCreated = new Date();
			db
				.collection('settlements')
				.add({
					name,
					dateCreated,
					dateModified: dateCreated,
					population: 0,
				})
				.then(res => {
					console.log('CREATED', res);
					this.$router.push({
						name: 'Settlement',
						params: { settlementId: res.id },
					});
				})
				.catch(err => console.error(err));
		},
	},
};
</script>
