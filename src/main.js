import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueFire from 'vuefire';
import firebase from 'firebase';
import './registerServiceWorker';
import './firebase';

Vue.use(VueFire);

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(user => {
	console.log('user', user.email);
	const app = new Vue({
		router,
		store,
		render: h => h(App),
	});
	app.$mount('#app');
});
