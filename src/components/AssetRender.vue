<template>
	<div>
		<div
			v-for="(asset, key) in list"
			:key="key"
			class="text-xs mb-2"
		>
			<div class="text-yellow">{{asset.name}}</div>
			<div v-html="asset.description" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>
