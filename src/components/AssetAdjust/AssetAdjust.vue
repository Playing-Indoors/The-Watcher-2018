<template>
	<div
		class="flex flex-col"
	>
		<slide-y-up-transition tag="div" group>
			<list-item
				v-for="(asset, key) in survivorAssets"
				:key="key"
				:name="asset.name"
				:description="asset.description"
				class="mb-4"
				@delete="removeAsset(key)"
			/>
		</slide-y-up-transition>

		<!-- https://projects.invisionapp.com/d/main#/console/9394408/237051717/preview -->

		<select
			v-if="max === 0 || Object.keys(survivorAssets).length < max"
			class="bg-grey p-3 text-white text-sm"
			@input="updateValue($event.target.value)"
		>
			<option>- -</option>
			<option
				v-for="(asset, key) in assets"
				v-if="!survivorAssets[key]"
				:key="key"
				:value="key"
			>{{asset.name}}</option>
		</select>
	</div>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions';
import db from '@/firebase';
import CoreButton from '@/components/CoreButton/CoreButton';
import ListItem from '@/components/ListItem/ListItem';

export default {
	components: { CoreButton, ListItem, SlideYUpTransition },
	model: {
		prop: 'survivorAssets'
	},
	props: {
		survivorAssets: {
			type: Object,
			required: true,
			default: () => ({})
		},
		attribute: {
			type: String,
			required: true
		},
		max: {
			type: Number,
			default: 0
		}
	},
	firestore() {
		return {
			assets: db.doc(`assets/${this.attribute}`)
		};
	},
	data() {
		return {
			assets: []
		};
	},
	methods: {
		updateValue(asset) {
			this.$emit('input', {
				...this.survivorAssets,
				[asset]: this.assets[asset]
			});
		},
		removeAsset(assetKey) {
			const newList = { ...this.survivorAssets };
			delete newList[assetKey];
			this.$emit('input', newList);
		}
	}
};
</script>
