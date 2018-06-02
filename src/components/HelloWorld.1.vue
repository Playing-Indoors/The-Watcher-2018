<template>
  <div :class="bg" class="hello">
    <h1>{{ msg }}</h1>

    <article v-for="(location, idx) in locations" :key="idx">
      <img :src="location.image" width="300px">
      <h1>{{ location.name }}</h1>
      <button class="button is-small is-danger" @click="deleteLocation(location.id)">
        Delete
      </button>
    </article>

    <form @submit="addLocation(name, image)">
      <h2>Add a New Location</h2>
      <input v-model="name" placeholder="Location Name" class="input">
      <input v-model="image" placeholder="Location Image URL" class="input">
      <button type="submit" class="button is-success">Add New Location</button>
    </form>

    <p
      v-for="(box, index) in boxes"
      :key="index"
    >
      {{box}}
    </p>
    <button @click="addLocation('testbox')">add</button>
  </div>
</template>

<script>
// import db from '../firebase';

import { db } from '../main';

export default {
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			bg: 'bg-blue',
			boxes: [],
			locations: [],
			name: '',
			image: ''
		};
	},
	// mounted() {
	// 	console.log('mounted');
	// 	console.log(this.$firestoreRefs);
	// },
	firestore() {
		return {
			locations: db.collection('locations').orderBy('createdAt'),
			boxes: db.collection('boxes').orderBy('createdAt')
		};
	},
	methods: {
		addLocation(name, image) {
			const createdAt = new Date();
			db.collection('locations').add({ name, image, createdAt });
			// Clear values
			this.name = '';
			this.image = '';
		},
		deleteLocation(id) {
			db
				.collection('locations')
				.doc(id)
				.delete();
		}
	}
	// firestore() {
	// 	return {
	// 		boxes: db.collection('boxes'),
	// 	};
	// },
	// firestore: {
	// 	boxes: {
	// 		source: db.collection('boxes'),
	// 		cancelCallback(err) {
	// 			console.error(err);
	// 		},
	// 	},
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
