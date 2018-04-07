<template>
	<div class="bg-grey flex">
		<button
			@click="toggleModal()"
			type="button"
			class="p-2 flex flex-col justify-between items-stretch w-full text-inherit text-left shadow hover:shadow-lg"
		>
			<header
				v-if="name"
				class="text-xs"
			>{{name}} {{item}}</header>
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
						name="modal"
						:item="item"
						:updateTempObject="updateTempObject"
					/>
				</div>
				<button @click="toggleModal()" class="w-full bg-yellow p-4 text-white">Confirm</button>
				<button @click="toggleModal()" class="w-full text-white p-4">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
		},
	},
	data() {
		return {
			showModal: false,
			item: 1,
		};
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		},
		updateTempObject(newObj) {
			this.item = newObj;
			console.log(newObj);
		},
	},
};
</script>
