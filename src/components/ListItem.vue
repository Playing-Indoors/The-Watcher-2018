<template>
  <div
    class="mb-4 flex items-center flex-wrap  text-sm"
  >
    <div class="flex-grow p-3 bg-grey">{{name}}</div>
    <core-button v-if="description" class="flex-shrink" @click="showDesc = !showDesc">?</core-button>
    <core-button class="flex-shrink" color="red" @click="$emit('delete')">x</core-button>
    <slide-y-up-transition>
      <div v-show="showDesc" class="w-full text-center text-xs pt-4 px-2" v-html="description" />
    </slide-y-up-transition>
  </div>
</template>

<script>
import CoreButton from '@/components/CoreButton/CoreButton';
import { SlideYUpTransition } from 'vue2-transitions';

export default {
	components: { CoreButton, SlideYUpTransition },
	props: {
		name: {
			type: String,
			required: true,
			default: ''
		},
		description: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			showDesc: false
		};
	},
	methods: {
		removeAsset(assetKey) {
			const newList = { ...this.survivorAssets };
			delete newList[assetKey];
			this.$emit('input', newList);
		}
	}
};
</script>
