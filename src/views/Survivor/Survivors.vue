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
					<the-hunt :settlementId="settlementId" />
				</div>
			</template>
		</top-bar>
		<div class="flex">
			<survivor
				v-for="(survivor, idx) in survivors"
				:key="idx"
				:survivorId="survivor"
				:settlementId="settlementId"
				class="flex-1"
				:id="survivor"
			/>
		</div>
  </div>
</template>

<script>
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
			huntVisible: false
		};
	},
	methods: {
		toggleHunt(toggle = !this.huntVisible) {
			this.huntVisible = toggle;
		}
	}
};
</script>
