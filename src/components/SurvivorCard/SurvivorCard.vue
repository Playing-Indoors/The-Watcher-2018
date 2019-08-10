<template>
	<router-link
		v-if="survivor"
		:to="{
			name: 'Survivors',
			params: {
				survivorId: survivor.id
			}

		}"
		class="shadow hover:shadow-lg bg-grey-dark p-4 flex w-full text-white no-underline"
	>
		<div class="flex-1">
			<div>{{survivor.name}}</div>
			<div class="text-grey text-xs">Last Accessed*: {{dateHandled}}</div>
			<div class="text-grey text-xs">Created On: {{survivor.dateCreated}}</div>
		</div>
		<div class="text-grey text-xs">
			Stat*: <span class="text-white">0</span>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		survivor: {
			type: Object,
			default: () => ({}),
			required: true
		}
	},
	computed: {
		dateHandled: () => {
			return (
				new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
			);
			//console.log(survivor.$route.params.settlementId)
		}
	}
};
</script>
