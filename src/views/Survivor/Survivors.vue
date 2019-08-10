<template>
	<div>
		<top-bar>
			Hunting Party
			<router-link
				slot="left"
				:to="{ name: 'Settlement' }"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
			/>
			<template slot="right">
				<button
					class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
					@click="toggleHunt()"
				>
					&oplus;
				</button>
				<div
					:class="huntVisible || 'hidden'"
					class="bg-overlay fixed pin z-50"
				>
					<button
						class="absolute pin-r pin-t mr-4 mt-4 inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
						@click="toggleHunt()"
					>
						x
					</button>
					<the-hunt
						:active-survivor-id="survivorId"
						:settlement-id="settlementId"
					/>
				</div>
			</template>
		</top-bar>

		<div class="flex">
			<survivor
				:survivor-id="survivorId"
				:settlement-id="settlementId"
				class="flex-1"
			/>
			<survivor
				v-for="(survivor, idx) in eligibleHunters"
				v-if="idx < showHuntCount"
				:key="idx"
				:survivor-id="survivor.survivorId"
				:settlement-id="settlementId"
				class="flex-1"
			/>
		</div>
	</div>
</template>

<script>
import debounce from 'lodash/debounce';

import db from '@/firebase';
import TopBar from '@/components/TopBar/TopBar';
import Survivor from './Survivor';
import TheHunt from './TheHunt';

export default {
	components: {
		Survivor,
		TopBar,
		TheHunt
	},
	props: {
		survivorId: {
			type: String,
			required: true
		},
		settlementId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			hunting: [],
			huntVisible: false,
			showHuntCount: 0
		};
	},
	computed: {
		eligibleHunters() {
			return this.hunting.filter(survivor => {
				if (survivor.survivorId === this.survivorId) {
					return false;
				}
				if (!survivor.visible) {
					return false;
				}
				return true;
			});
		}
	},
	firestore() {
		return {
			hunting: db.collection(`settlements/${this.settlementId}/hunting`)
		};
	},
	mounted: function() {
		this.calcViewport();
		window.addEventListener('resize', this.calcViewportDebounce);
	},
	beforeDestroy: function() {
		window.removeEventListener('resize', this.calcViewportDebounce);
	},
	methods: {
		toggleHunt(toggle = !this.huntVisible) {
			this.huntVisible = toggle;
		},
		calcViewport() {
			const width = document.documentElement.clientWidth;
			// 400 is smallest a survivor should be
			// we subtract one because we always show the active survivor
			this.showHuntCount = this.showHuntcount = Math.floor(width / 400) - 1;
		},
		calcViewportDebounce: debounce(function() {
			this.calcViewport();
		}, 500)
	}
};
</script>
