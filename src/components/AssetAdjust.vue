<template>
	<div
		class="flex flex-col"
	>
		<slide-y-up-transition tag="div" group>
			<list-item
				v-for="(asset, key) in survivorAssets"
				:key="key"
				class="mb-4"
				:name="asset.name"
				:description="asset.description"
				@delete="removeAsset(key)"
			/>
		</slide-y-up-transition>

		<!-- https://projects.invisionapp.com/d/main#/console/9394408/237051717/preview -->

		<select
			v-if="Object.keys(survivorAssets).length < 3"
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
import ListItem from '@/components/ListItem';

export default {
	model: {
		prop: 'survivorAssets'
	},
	components: { CoreButton, ListItem, SlideYUpTransition },
	props: {
		survivorAssets: {
			type: Object,
			required: true,
			default: () => ({})
		},
		attribute: {
			type: String,
			required: true
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
