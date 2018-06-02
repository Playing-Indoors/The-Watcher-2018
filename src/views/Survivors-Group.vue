<template>
  <div>
    <div class="flex justify-center p-4">
      <button
        type="button"
        class="w-16 pt-8 border-4 border-grey-light border-dashed
				hover:bg-grey"
        @click="addPanel(0)"
      />
      <div v-for="(panel, idx) in panels"
           :key="idx"
           class="max-w-xs w-full"
      >
        <panel-selector />
      </div>
      <button
        v-if="panels.length > 0"
        type="button"
        class="w-16 pt-8 border-4 border-grey-light border-dashed
				hover:bg-grey"
        @click="addPanel(panels.length)"
      />
    </div>
  </div>
</template>

<script>
import PanelSelector from './PanelSelector';

export default {
	components: {
		PanelSelector
	},
	data() {
		return {
			panels: []
		};
	},
	methods: {
		addPanel(index) {
			console.log(index);
			this.panels.splice(0, 0, 'panel');
		}
	}
};
</script>
