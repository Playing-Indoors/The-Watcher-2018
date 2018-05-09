// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCWiM-9UD0iM8UXKfH2iNvh7daIx4yxiMQ',
	authDomain: 'the-watcher-b3ddf.firebaseapp.com',
	databaseURL: 'https://the-watcher-b3ddf.firebaseio.com',
	projectId: 'the-watcher-b3ddf',
	storageBucket: 'the-watcher-b3ddf.appspot.com',
	messagingSenderId: '1075845017475'
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
