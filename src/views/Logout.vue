<template>
	<div>Logging out...</div>
</template>

<script>
import firebase from 'firebase';

export default {
	created() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				this.$router.push({
					name: 'Login'
				});
			});
	}
};
</script>
