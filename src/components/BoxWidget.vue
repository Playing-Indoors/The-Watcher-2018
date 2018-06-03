<template>
	<div class="flex flex-col">
		<label v-if="name" class="inline-block pb-1 text-xs">{{name}}</label>
		<div class="bg-grey-dark flex flex-1">
			<button
				type="button"
				class="py-6 px-4 flex flex-col justify-between items-stretch w-full text-inherit text-left shadow hover:shadow-lg"
				@click="toggleModal()"
			>
				<!-- <header
					v-if="name"
					class="text-xs"
				>{{name}} {{item}}</header> -->
				<div
					class="flex justify-between w-full"
				>
					<slot />
				</div>
			</button>
			<div v-if="showModal" class="absolute pin bg-overlay flex flex-col justify-center items-center">
				<div class="max-w-xs w-full">
					<div class="bg-grey-darkest p-4">
						<header class="text-2xl text-center mb-4">{{name}}</header>
						<slot
							:item="item"
							:updateTempObject="updateTempObject"
							name="modal"
						/>
					</div>
					<button class="w-full bg-yellow p-4 text-white" @click="toggleModal()">Confirm</button>
					<button class="w-full text-white p-4" @click="toggleModal()">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			showModal: false,
			item: 1
		};
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		},
		updateTempObject(newObj) {
			this.item = newObj;
			console.log('new', newObj);
		}
	}
};
</script>
