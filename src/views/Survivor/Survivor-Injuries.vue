<template>
  <layout-grid :columns="1">
    <div
      v-for="location in locations"
      :key="location"
      class="border-b border-grey"
    >
      <label
        class="block pb-1 text-xs capitalize"
      >{{location}}</label>
      <div
        v-for="(injury, injuryKey) in injuries"
        v-if="injury.type === location"
        :key="injuryKey"
        class="flex items-center my-2"
      >
        <label class="flex-1 text-xxs text-grey-light pl-2">{{injury.name}}</label>
        <injuries-toggle
          :id="injuryKey"
          :injury="injury"
          :save-attributes="saveAttributes"
        />
      </div>
    </div>
  </layout-grid>
</template>

<script>
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';
import InjuriesToggle from './Survivor-Injuries-Toggle';

export default {
	components: {
		LayoutGrid,
		InjuriesToggle
	},
	props: {
		injuries: {
			type: Object,
			required: true
		},
		saveAttributes: {
			type: Function,
			default: () => {}
		}
	},
	data() {
		return {
			locations: ['head', 'arms', 'chest', 'waist', 'legs']
		};
	},
	methods: {
		handleInjuryToggle(key) {
			const field = `severe-injuries.${key}.value`;
			this.saveAttributes({
				[field]: this.injuries[key].value
			});
			// console.log(this.injuries);
			// db
			// 	.doc(
			// 		`settlements/${this.settlementId}/survivors/${
			// 			this.survivor.id
			// 		}/severe-injuries/${id}`
			// 	)
			// 	.update(this.injuries[index])
			// 	.then(res => console.log('saved', res));
		}
	}
};
</script>
