<template>
  <div class="about">
    <h1>survivors</h1>
    <article
      v-for="survivor in survivors"
      :key="survivor.id"
    >
      <router-link
        :to="{
          name: 'survivors-detail',
          params: {
            id: survivor.id
          }
        }"
        class="block"
      >
        {{survivor.name}} - {{survivor.gender}}
      </router-link>
    </article>
  </div>
</template>

<script>
import db from '@/firebase';

export default {
	data() {
		return {
			survivors: []
		};
	},
	firestore() {
		return {
			survivors: db.collection('survivors').orderBy('createdAt')
		};
	}
};
</script>
