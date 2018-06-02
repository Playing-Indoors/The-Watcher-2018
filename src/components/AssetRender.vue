<template>
  <div class="text-xs mb-2" >
    <div v-if="Object.keys(list).length === 0">- -</div>
    <div
      v-for="(asset, key) in list"
      :key="key"
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
