<docs>
Can we add a "current user panel"?
</docs>

<template>
  <div>
		<div class="flex justify-center p-4">
			<button
				@click="addPanel(0)"
				type="button"
				class="w-16 pt-8 border-4 border-grey-light border-dashed
				hover:bg-grey"
			/>
			<div class="max-w-xs w-full"
				v-for="(panel, idx) in panels"
				:key="idx"
			>
				<panel-selector />
			</div>
			<button
				v-if="panels.length > 0"
				@click="addPanel(panels.length)"
				type="button"
				class="w-16 pt-8 border-4 border-grey-light border-dashed
				hover:bg-grey"
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
