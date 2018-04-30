<template>
	<layout-grid :columns="1" class="text-left">
		<div class="text-center">The Hunt</div>
		<div
			v-for="survivor in hunting"
			v-if="huntedLookup(survivor.survivorId)"
			:key="survivor.id"
			class="flex items-center"
		>
			<router-link
				class="flex-1 text-white no-underline"
				:class="survivor.survivorId !== activeSurvivorId || 'text-yellow'"
				:to="{
					name: 'Survivors',
					params: {
						survivorId: survivor.survivorId
					}
				}"
			>
				{{huntedLookup(survivor.survivorId).name}}
			</router-link>
			<div class="flex items-center">
				<!-- <core-button
					v-if="idx !== 0"
					color="text"
					class="text-sm"
				>◄</core-button>
				<core-button
					v-if="idx !== hunting.length - 1"
					color="text"
					class="text-sm"
					@click="removeHunted(survivor.id)"
				>►</core-button> -->
				<!-- <core-button
					color="text"
					class="text-sm"
					@click="removeHunted(survivor.id)"
				>|+|</core-button>
				<core-button
					color="text"
					class="text-sm"
					@click="removeHunted(survivor.id)"
				>|-|</core-button> -->
				<template v-if="activeSurvivorId">
					<span v-if="survivor.survivorId === activeSurvivorId">Active&nbsp;</span>
					<core-button
						v-else
						@click="toggleVisible(survivor.id, !survivor.visible)"
						color="text"
						class="text-sm"
					>
						<template v-if="survivor.visible">hide</template>
						<template v-else>show</template>
					</core-button>
				</template>
				<core-button
					color="red"
					class="text-sm"
					@click="removeHunted(survivor.id)"
				>X</core-button>
			</div>
		</div>

		<core-select
			label="Quick add to hunt"
			placeholder="- -"
			:options="huntEligable"
			optionKey="id"
			optionText="name"
			@input="addToHunt"
		/>
  </layout-grid>
</template>

<script>
import db from '@/firebase';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import SurvivorCard from '@/components/SurvivorCard';
import CoreButton from '@/components/CoreButton/CoreButton';
import CoreSelect from '@/components/CoreSelect/CoreSelect';

export default {
	components: {
		LayoutGrid,
		CoreButton,
		CoreSelect,
		SurvivorCard
	},
	props: {
		settlementId: {
			type: String,
			required: true
		},
		activeSurvivorId: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			addSurvivor: null,
			hunting: [],
			survivors: []
		};
	},
	computed: {
		huntEligable() {
			const huntedIds = this.hunting.map(s => s.survivorId);
			return this.survivors.filter(s => huntedIds.indexOf(s.id) === -1);
		}
	},
	firestore() {
		return {
			hunting: db.collection(`settlements/${this.settlementId}/hunting`),
			survivors: db.collection(`settlements/${this.settlementId}/survivors`)
		};
	},
	methods: {
		huntedLookup(id) {
			return this.survivors.find(survivor => survivor.id === id);
		},
		addToHunt(id) {
			this.addSurvivor = null;
			if (id && !this.hunting.find(survivor => survivor.survivorId === id)) {
				this.$firestoreRefs.hunting.add({ survivorId: id });
			}
		},
		toggleVisible(id, visible) {
			db
				.doc(`settlements/${this.settlementId}/hunting/${id}`)
				.update({ visible });
		},
		removeHunted(id) {
			db.doc(`settlements/${this.settlementId}/hunting/${id}`).delete();
		}
	}
};
</script>
