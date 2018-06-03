<template>
	<div id="app" class="min-h-screen antialiased bg-grey-darkest text-white font-sans">
		<router-view />
		<!-- <button @click="checkPWA()">PWA</button> -->
	</div>
</template>

<script>
// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', e => {
// 	// Prevent Chrome 67 and earlier from automatically showing the prompt
// 	e.preventDefault();
// 	// Stash the event so it can be triggered later.
// 	deferredPrompt = e; // eslint-disable-next-line
// 	console.log('PWA deferred success', deferredPrompt);
// });

export default {
	methods: {
		// 	checkPWA() {
		// 		// eslint-disable-next-line
		// 		console.log('deferred', deferredPrompt);
		// 	}
	}
};
</script>


<style lang="scss">
@import './css/app';
</style>
