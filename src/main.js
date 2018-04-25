import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueFire from 'vuefire';
import firebase from 'firebase';
import './registerServiceWorker';
import './firebase';

// const settings = { /* your settings... */ timestampsInSnapshots: true };
// firestore.settings(settings);

Vue.use(VueFire);

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
	const app = new Vue({
		router,
		store,
		render: h => h(App)
	});
	app.$mount('#app');
});
