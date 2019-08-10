<template>
	<div>
		<top-bar>
			Create New Survivor
			<router-link
				slot="left"
				:to="{ name: 'Settlement' }"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
			>
				&lt;
			</router-link>
		</top-bar>

		<layout-grid :columns="1" contents>
			<form @submit.prevent="handleCreate(name, gender)">
				<core-input
					v-model="name"
					label="Name"
					autofocus
					required
				/>
				<core-select
					v-model="gender"
					:options="['Male', 'Female']"
					label="Gender"
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
			gender: 'Male',
			injuries: []
		};
	},
	firestore() {
		return {
			injuries: db.doc('assets/severeInjuries')
		};
	},
	methods: {
		handleCreate(name, gender) {
			const newSurvivor = {
				dateCreated:
					new Date().toLocaleDateString() +
					' ' +
					new Date().toLocaleTimeString(),
				dateModified:
					new Date().toLocaleDateString() +
					' ' +
					new Date().toLocaleTimeString(),
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
				notes: '',
				'severe-injuries': this.injuries
			};
			db
				.collection(`settlements/${this.settlementId}/survivors`)
				.add(newSurvivor)
				.then(res => {
					console.log('CREATED', res);
					this.$router.push({
						name: 'Survivors',
						params: { survivorId: res.id }
					});
				})
				.catch(err => console.error(err));
			// There is a cloud function that gets run at this point to update the settlements survivor count
		}
	}
};
</script>
