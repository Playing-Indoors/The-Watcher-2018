<template>
  <div
		:class="$style.layout"
	>
    <h1 class="span-6">
			Settlements
			<router-link
				:to="{ name: 'Settlements-New' }"
			>
				[+]
			</router-link>
		</h1>
		<article
			v-for="settlement in settlements"
			:key="settlement.id"
			class="bg-grey span-6 p-4"
		>
			<router-link
				:to="{
					name: 'Settlement',
					params: {
						settlementId: settlement.id
					}
				}"
				class="block text-white no-underline"
			>
				<strong>{{settlement.name}}</strong> <br />
				Last Accessed: {{settlement.dateModified}} <br />
				Created On: {{settlement.dateCreated}} <br />
				Population: {{settlement.population}}
			</router-link>
		</article>
  </div>
</template>

<script>
import db from '@/firebase';

export default {
	data() {
		return {
			settlements: [],
		};
	},
	firestore() {
		return {
			settlements: db.collection('settlements').orderBy('dateModified', 'desc'),
			// settlements: db.collection('settlements'),
		};
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
