<template>
  <div
    :class="horizontal ? 'flex justify-between items-end' : ''"
    class="text-center w-full"
  >
    <div v-if="horizontal">[]</div>
    <div class="text-5xl font-bold">{{number}}</div>
    <div v-if="name" class="text-xxs text-grey-lightest">{{name}}</div>
  </div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		},
		number: {
			type: Number,
			required: true
		},
		horizontal: {
			type: Boolean,
			default: false
		}
	}
};
</script>
