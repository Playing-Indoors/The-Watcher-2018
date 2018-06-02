<template>
  <div v-if="survivors">
    <layout-grid :columns="1" contents>
      <div v-if="survivors && survivors.length === 0">
        <div class="bg-red p-4">Sorry no survivors</div>
      </div>
      <slide-y-up-transition tag="div" group>
        <survivor-card
          v-for="survivor in survivors"
          :key="survivor.id"
          :survivor="survivor"
        />
      </slide-y-up-transition>
    </layout-grid>
  </div>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions';
import db from '@/firebase';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import SurvivorCard from '@/components/SurvivorCard';

export default {
	components: {
		LayoutGrid,
		SurvivorCard,
		SlideYUpTransition
	},
	props: {
		settlementId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			survivors: []
		};
	},
	firestore() {
		return {
			survivors: db.collection(`settlements/${this.settlementId}/survivors`)
		};
	}
};
</script>
