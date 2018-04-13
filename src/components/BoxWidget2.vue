<template>
	<div class="flex flex-col">
		<label v-if="name" class="inline-block pb-1 text-xs">{{name}}</label>
		<div class="bg-grey-dark flex flex-1">
			<button
				@click="toggleModal()"
				type="button"
				class="py-6 px-4 flex flex-col justify-between items-stretch w-full text-inherit text-left shadow hover:shadow-lg"
			>
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
						/>
					</div>
					<button @click="confirm()" class="w-full bg-yellow p-4 text-white">Confirm</button>
					<button @click="cancel()" class="w-full text-white p-4">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import db from '@/firebase';

export default {
	props: {
		name: {
			type: String,
		},
		resetData: {
			type: Function,
		},
		saveData: {
			type: Function,
		},
		value: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			showModal: false,
			item: 1,
		};
	},
	methods: {
		confirm() {
			console.log('data', this.value);
			this.saveData();
			db
				.doc('settlements/ZDfh7AjWNCy3Eq8WYUog/survivors/0H0eXjTygGLvbYYcziLm')
				.update({ ...this.value });
			this.toggleModal();
		},
		cancel() {
			this.resetData();
			this.toggleModal();
		},
		toggleModal() {
			this.showModal = !this.showModal;
		},
	},
};
</script>
