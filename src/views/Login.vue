Improvement
- Allow anonymous
- Allow Email Link auth
- https://console.firebase.google.com/u/0/project/the-watcher-b3ddf/authentication/providers

<template>
	<layout-grid :columns="1" contents>
		<form @submit.prevent="login()">
			<div class="text-center ">
				<logo-mark class="text-white w-32" />
			</div>
			<!-- <label for="email" class="block ">Log in to The Watcher</label> -->
			<core-input
				v-model="email"
				label="Email"
				autofocus
				required
				name="email"
			/>
			<core-input
				v-model="password"
				label="Password"
				type="password"
				required
				name="password"
			/>
			<div
				v-if="error"
				class="bg-red p-4"
				data-test="error"
			>{{message}}</div>
			<core-button submit data-test="submit">Login</core-button>
			<div class="flex justify-between">
				<core-button color="text" @click="forgot()">Forgot Password</core-button>
				<core-button color="text" @click="register()">Create Account</core-button>
			</div>
		</form>
	</layout-grid>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';
import CoreButton from '@/components/CoreButton/CoreButton';
import CoreInput from '@/components/CoreInput/CoreInput';
import LogoMark from '@/assets/logo-mark';
import LayoutGrid from '@/components/LayoutGrid/LayoutGrid';

export default {
	components: {
		CoreButton,
		CoreInput,
		LogoMark,
		LayoutGrid
	},
	data() {
		return {
			message: '',
			error: false,
			email: '',
			password: ''
		};
	},
	methods: {
		handleSuccess(message = '') {
			this.error = false;
			this.message = message;
		},
		handleError(message = '') {
			this.error = true;
			this.message = message;
		},
		forgot() {
			firebase
				.auth()
				.sendPasswordResetEmail(this.email)
				.then(res => this.handleSuccess(res))
				.catch(error => this.handleError(error.message));
		},
		register() {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(res => this.handleSuccess(res))
				.catch(error => {
					if (error.code === 'auth/weak-password') {
						this.handleError('The password is too weak.');
					} else if (error.code === 'auth/email-already-in-use') {
						this.handleSuccess('User already exists... trying to log in');
						this.login();
					} else {
						this.handleError(error.message);
					}
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
					this.loginAttempt();
				})
				.catch(error => this.handleError(error));
		},
		loginAttempt() {
			firebase
				.auth()
				.signInAndRetrieveDataWithEmailAndPassword(this.email, this.password)
				.then(() => {
					this.handleSuccess();
					this.$router.push({ name: 'Settlements' });
				})
				.catch(error => {
					if (error.code === 'auth/wrong-password') {
						this.handleError('The password is too weak.');
					} else {
						this.handleError(error.message);
					}
				});
		},
		logout() {
			firebase
				.auth()
				.signOut()
				.then(res => {
					this.handleSuccess(res);
				});
		}
	}
};
</script>
