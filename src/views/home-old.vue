<template>
	<div>
		<br >
		<img src="../assets/logo.png">
		Email
		<input v-model="email" type="email" >
		<br >
		Password
		<input v-model="password" type="password" >
		<br >
		<button type="submit" @click="register">Register</button>
		<button type="submit" @click="login">Login</button>
		<button type="submit" @click="logout">logout</button>
		<button type="submit" @click="getUser">user</button>
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'home',
	components: {
		HelloWorld
	},
	data() {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		getUser() {
			if (firebase.auth().currentUser) {
				console.log(firebase.auth().currentUser.email);
			} else {
				console.log('not logged');
			}
		},
		register() {
			console.warn('register clicked');
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(res => console.log('success', res))
				.catch(error => {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					if (errorCode === 'auth/weak-password') {
						alert('The password is too weak.');
					} else if (errorCode === 'auth/email-already-in-use') {
						alert('User already exists... logging in');
						this.login();
					} else {
						alert(errorMessage);
					}
					console.log(error);
				});
		},
		login() {
			firebase
				.auth()
				.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
				.then(() => {
					// Existing and future Auth states are now persisted in the current
					// session only. Closing the window would clear any existing state even
					// if a user forgets to sign out.
					// ...
					// New sign-in will be persisted with session persistence.
					this.handleLogin();
				})
				.catch(function(error) {
					// Handle Errors here.
					// var errorCode = error.code;
					// var errorMessage = error.message;
					// alert(errorMessage);
					console.log(error);
				});
		},
		handleLogin() {
			firebase
				.auth()
				.signInAndRetrieveDataWithEmailAndPassword(this.email, this.password)
				.then(res => {
					console.log('success', res);
				})
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					if (errorCode === 'auth/wrong-password') {
						alert('Wrong password.');
					} else {
						alert(errorMessage);
					}
					console.log(error);
				});
		},
		logout() {
			firebase
				.auth()
				.signOut()
				.then(res => {
					console.log('success', res);
				});
		}
	}
};
</script>
