<template>
  <div id="app" class="min-h-screen antialiased bg-grey-darkest text-white font-sans">
		<!-- <header class="bg-black absolute">
			<div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/settlements">Settlements</router-link> |
				<router-link to="/survivors">Survivors</router-link> |
				<router-link to="/survivors/group">Survivors Group</router-link> |
				<router-link to="/survivors/new">Survivors Add</router-link>
			</div>
		</header> -->
		<!-- <div class="flex min-h-screen mx-auto max-w-sm w-full">
	    <router-view class="w-full" />
		</div> -->
		<router-view />
  </div>
</template>

<style lang="scss">
@import './css/app';
</style>
