<template>
	<button
		type="button"
		class="relative bg-grey-dark py-8 px-4 flex flex-col justify-between items-stretch w-full text-inherit text-left shadow hover:shadow-lg"
		@click="togglePopup()"
	>
		<h1 class="absolute pin-l pin-t p-3 text-xs">Stats</h1>
		<!-- If type = stat -->
		<div
			v-if="$slots.display"
			class="flex justify-around"
		>
			<slot name="display" />
		</div>
		<!-- If type = asset display list-->
		<slide-y-down-transition :duration="350">
			<div v-if="showPopup" :class="$style.popup" class="fixed bg-overlay pin z-10">
				<div class="m-4 absolute pin bg-grey-darkest overflow-y-scroll">
					inner
				</div>
			</div>
		</slide-y-down-transition>
	</button>
</template>

<script>
import { SlideYDownTransition } from 'vue2-transitions';

export default {
	components: {
		SlideYDownTransition
	},
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			showPopup: false
		};
	},
	created() {
		this.escapeHandler = e => {
			if (e.key === 'Escape' && this.showPopup) {
				this.togglePopup(false);
			}
		};
		document.addEventListener('keydown', this.escapeHandler);
	},
	destroyed() {
		document.removeEventListener('keydown', this.escapeHandler);
	},
	methods: {
		togglePopup(toggle = !this.showPopup) {
			this.showPopup = toggle;
		}
	}
};
</script>

<style lang="scss" module>
.popup {
	margin-top: 120px;
}
</style>
