<template>
	<div>
		<top-bar>
			Create New Settlement
			<router-link
				slot="left"
				:to="{ name: 'Settlements' }"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
			>
				&lt;
			</router-link>
		</top-bar>

		<layout-grid :columns="1" contents>
			<form @submit.prevent="handleCreate(name)">
				<core-input
					v-model="name"
					label="Name"
					autofocus
					required
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
import CoreButton from '@/components/CoreButton/CoreButton';

export default {
	components: {
		TopBar,
		LayoutGrid,
		CoreInput,
		CoreButton
	},
	data() {
		return {
			name: ''
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
			const day = new Date().toLocaleDateString();
			const hours = new Date().toLocaleTimeString();
			const date = day + ' ' + hours;
			db
				.collection('settlements')
				.add({
					name,
					dateCreated: date,
					dateModified: date,
					population: 0
				})
				.then(res => {
					console.log('CREATED', res);
					this.$router.push({
						name: 'Settlement',
						params: { settlementId: res.id }
					});
				})
				.catch(err => console.error(err));
		}
	}
};
</script>
