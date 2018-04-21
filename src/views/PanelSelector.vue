<template>
	<survivors-detail v-if="survivor" :id="survivor" />
	<div v-else>
		<button
			v-for="survivor in survivors"
			:key="survivor.id"
			class="block"
			@click="addSurvivorPanel(survivor.id)"
		>View {{survivor.name}}</button>
		[View Player One] <br />
		[View Logan's Survivor] <br />
		[View Settlement] <br />
		[View Storage] <br />
		[View FAQ] <br />
		[View Glossary]
	</div>
</template>

<script>
import db from '@/firebase';
import SurvivorsDetail from './Survivors-Detail';

export default {
	components: {
		SurvivorsDetail
	},
	data() {
		return {
			survivor: null,
			survivors: []
		};
	},
	firestore() {
		return {
			survivors: db.collection('survivors').orderBy('createdAt')
		};
	},
	methods: {
		addSurvivorPanel(id) {
			this.survivor = id;
		}
	}
};
</script>
