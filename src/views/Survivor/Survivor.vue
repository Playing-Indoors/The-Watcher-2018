<docs>
	wrapper - handles popup logic
		title
		display slot
		popup slot
		saves obj
		reset obj
</docs>

<template>
	<div v-if="survivor">
		<top-bar>
			{{survivor.name}}
		</top-bar>
		<div class="bg-black flex text-xxs text-center">
			<button
				class="flex-auto no-underline p-1 border-b-2 hover:text-yellow"
				:class="tab === 'sheet' ? 'text-yellow border-yellow' : 'text-grey border-grey-dark'"
				type="button"
				@click="handleTab('sheet')"
			>Survivor Sheet</button>
			<button
				class="flex-auto no-underline p-1 border-b-2 hover:text-yellow"
				:class="tab === 'injuries' ? 'text-yellow border-yellow' : 'text-grey border-grey-dark'"
				type="button"
				@click="handleTab('injuries')"
			>Severe Injuries</button>
			<button
				class="flex-auto no-underline p-1 border-b-2 hover:text-yellow"
				:class="tab === 'info' ? 'text-yellow border-yellow' : 'text-grey border-grey-dark'"
				type="button"
				@click="handleTab('info')"
			>Additional Information</button>
		</div>
		<survivor-sheet
			v-if="tab === 'sheet'"
			:saveAttributes="saveAttributes"
			:survivor="survivor"
		/>
		<survivor-injuries
			v-else-if="tab === 'injuries'"
			:saveAttributes="saveAttributes"
			:survivor="survivor"
		/>
		<survivor-info
			v-else-if="tab === 'info'"
			:saveAttributes="saveAttributes"
			:survivor="survivor"
		/>
  </div>
</template>

<script>
import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import SurvivorSheet from '@/views/Survivor/Survivor-Sheet';
import SurvivorInjuries from '@/views/Survivor/Survivor-Injuries';
import SurvivorInfo from '@/views/Survivor/Survivor-Info';

export default {
	components: {
		TopBar,
		SurvivorSheet,
		SurvivorInfo,
		SurvivorInjuries
	},
	props: {
		survivorId: {
			type: String,
			required: true
		},
		settlementId: {
			type: String,
			required: true
		},
		// Only uses for shadow /shrug
		partOfGroup: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			tab: 'sheet',
			survivor: {}
		};
	},
	computed: {
		stats() {
			return [
				{
					name: 'Movement',
					value: this.survivor.movement
				},
				{
					name: 'Accuracy',
					value: this.survivor.accuracy
				},
				{
					name: 'Strength',
					value: this.survivor.strength
				},
				{
					name: 'Evasion',
					value: this.survivor.evasion
				},
				{
					name: 'Luck',
					value: this.survivor.luck
				},
				{
					name: 'Speed',
					value: this.survivor.speed
				}
			];
		}
	},
	firestore() {
		return {
			survivor: db.doc(
				`settlements/${this.settlementId}/survivors/${this.survivorId}`
			)
		};
	},
	watch: {
		survivorId() {
			console.log('change', this.survivorId);
			this.$bind(
				'survivor',
				db.doc(`settlements/${this.settlementId}/survivors/${this.survivorId}`)
			).then(e => console.log(e));
		}
	},
	// beforeRouteUpdate(to, from, next) {
	// 	this.$bind(
	// 		'survivor',
	// 		db.doc(
	// 			`settlements/${this.settlementId}/survivors/${to.params.survivorId}`
	// 		)
	// 	);
	// 	next();
	// },
	methods: {
		handleTab(name) {
			this.tab = name;
		},
		handleSave() {
			this.$firestoreRefs.survivor
				.update({
					name: this.survivor.name
				})
				.then(res => console.log(res));
		},
		saveAttributes(obj) {
			console.log('saving', obj);
			this.$firestoreRefs.survivor
				.update(obj)
				.then(res => console.log('saved', res));
		}
	}
};
</script>

<style lang="scss" module>
.layout {
	display: grid;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	grid-template-columns: repeat(6, 1fr);

	> * {
		grid-column-end: span 2;
	}
}
</style>
