<template>
	<div class="flex flex-col">
		<label v-if="name" class="inline-block pb-1 text-xs">{{name}}</label>
		<form
			@submit.prevent="confirm()"
			class="bg-grey-dark flex flex-1"
		>
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
			<div v-if="showModal" class="fixed pin bg-overlay flex flex-col justify-center items-center" @click="cancel()">
				<!-- TODO: Think about changing this to a seperate close div -->
				<div class="max-w-xs w-full" @click.stop="() => {}">
					<div class="bg-grey-darkest p-4">
						<header class="text-2xl text-center mb-4">{{name}}</header>
						<slot
							name="modal"
						/>
					</div>
					<core-button
						submit
						:color="dirty ? 'yellow' : 'white'"
					>Confirm</core-button>
					<core-button color="text" @click="cancel()">Cancel</core-button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import CoreButton from '@/components/CoreButton/CoreButton';

export default {
	components: { CoreButton },
	props: {
		name: {
			type: String,
		},
		dirty: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		confirm() {
			// 	console.log('data', this.attributes);
			this.$emit('confirm');
			// 	db
			// 		.doc('settlements/ZDfh7AjWNCy3Eq8WYUog/survivors/0H0eXjTygGLvbYYcziLm')
			// 		.update({ ...this.attributes });
			this.toggleModal();
		},
		cancel() {
			this.$emit('cancel');
			this.toggleModal();
		},
		toggleModal() {
			this.showModal = !this.showModal;
		},
	},
};
</script>
