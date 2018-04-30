<template>
	<the-hunt
		:settlementId="settlementId"
	/>
</template>

<script>
import TheHunt from '@/views/Survivor/TheHunt';

export default {
	components: {
		TheHunt
	},
	props: {
		settlementId: {
			type: String,
			required: true
		}
	}
};
</script>
