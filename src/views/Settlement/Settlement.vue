<docs>
</docs>

<template>
  <div
		class="p-4 relative"
		:class="$style.layout"
		v-if="settlement"
	>
    <h1 class="span-6 text-center">{{settlement.name}}</h1>
    <h2 class="span-6 text-center">survivors</h2>
		<div v-if="!survivors || survivors.length === 0">Sorry no survivors</div>
		<article
			v-for="survivor in survivors"
			:key="survivor.id"
			class="bg-grey span-6 p-4"
		>
			<router-link
				:to="{
					name: 'Survivor',
					params: {
						survivorId: survivor.id
					}
				}"
				class="block text-white no-underline"
			>
				<strong>{{survivor.name}}</strong> <br />
				Last Accessed: {{survivor.dateModified}} <br />
				Created On: {{survivor.dateCreated}}
			</router-link>
		</article>
		<router-link
			:to="{ name: 'Survivor-New' }"
		>Create</router-link>

		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<div class="span-6 border-t pt-4 text-center">edits</div>
		<div class="span-6">
			Name:
			<input type="text" v-model="settlement.name" />
			<br />
			<div>Created: {{settlement.dateCreated}}</div>
			<div>Modified: {{settlement.dateModified}}</div>
			<div>Population: {{settlement.population}}</div>
			<button type="submit" class="bg-yellow" @click="handleSave">Save</button>
		</div>
  </div>
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
			settlement: {},
			survivors: [],
		};
	},
	firestore() {
		return {
			settlement: db.collection('settlements').doc(this.settlementId),
			survivors: db
				.collection('settlements')
				.doc(this.settlementId)
				.collection('survivors'),
		};
	},
	methods: {
		handleSave() {
			db
				.collection('settlements')
				.doc(this.settlementId)
				.update({
					name: this.settlement.name,
				})
				.then(res => {
					console.log('UPDATED', res);
					// this.$router.push({
					// 	name: 'SettlementsEdit',
					// 	params: { settlementId: res.id },
					// });
				})
				.catch(err => console.error(err));
		},
	},
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
