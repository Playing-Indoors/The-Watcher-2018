<docs>
Can we add a "current user panel"?
</docs>

<template>
  <div>
		<top-bar>
			Hunting Party
			<router-link
				slot="left"
				class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
				:to="{ name: 'Settlement' }"
			>
				&lt;
			</router-link>
			<template slot="right">
				<button
					@click="toggleHunt()"
					class="inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
				>
					&oplus;
				</button>
				<div
					:class="huntVisible || 'hidden'"
					class="bg-overlay fixed pin z-50"
				>
					<button
						@click="toggleHunt()"
						class="absolute pin-r pin-t mr-4 mt-4 inline-block text-yellow no-underline font-bold border border-yellow px-1 hover:bg-yellow hover:text-black"
					>
						x
					</button>
					<the-hunt
						:activeSurvivorId="survivorId"
						:settlementId="settlementId"
					/>
				</div>
			</template>
		</top-bar>
		<div class="flex">
			<survivor
				:survivorId="survivorId"
				:settlementId="settlementId"
				class="flex-1"
			/>
			<survivor
				v-for="(survivor, idx) in eligibleHunters"
				v-if="idx < showHuntCount"
				:key="idx"
				:survivorId="survivor.survivorId"
				:settlementId="settlementId"
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
		},
		survivors: {
			type: Array
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
			// NOT REALLY HAPPY WITH THIS DUE TO NOT SUPPORTING ZOOM!
			// DO I JUST ACCEPT DEFEAT AND USE BREAKPOINTS??!?
			const width = window.innerWidth;
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
