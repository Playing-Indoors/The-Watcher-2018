'use strict';

// [START all]
// [START import]
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp();

const firestore = admin.firestore();

// [END import]

// If the number of likes gets deleted, recount the number of likes

// recountPopulation({ name: 'Function Survivor Test' }, { params: { settlementId: 'KTOc2tlJOQPuefq7gpAN', survivorId: '1' } })

exports.recountPopulation = functions.firestore
	// ('settlements/KTOc2tlJOQPuefq7gpAN/survivors/3EIetaWMMd0QCZMIWN3n')
	.document('settlements/{settlementId}/survivors/{survivorId}')
	.onCreate((snap, context) => {
		// console.log('context', context);
		// console.warn(event);
		// console.warn(context);
		// console.log('recount started', context);
		// console.log(context);
		// console.log('recount started', context);
		// console.log(context);
		// console.log('data', snap.data());

		// Uncomment when done testing
		// const settlementRef = snap.ref;
		// console.log('id', settlementRef.id);
		// console.log('path', settlementRef.path);

		// const ref = snap.ref.firestore.doc('settlements/KTOc2tlJOQPuefq7gpAN');

		console.log(snap);
		console.log(context);
		const settlementId = context.params.settlementId;
		const settlementRef = firestore.doc(`settlements/${settlementId}`);
		const ref = firestore.collection(`settlements/${settlementId}/survivors`);
		// const ref = settlementRef.survivors;
		// console.warn('fef', ref);

		// console.log(ref.size);
		// console.log(ref);
		console.log(ref.path);
		console.log(snap.path);
		return ref
			.get()
			.then(colSnap => {
				// todo query data to check for alive people
				const population = colSnap.size;
				// console.log(colSnap.size);
				// console.log('size', colSnap.doc().survivors.size);
				// const pop = colSnap.data().population + 1;
				// console.log('pop', pop);
				// console.log('size', colSnap.data());
				console.log('population', population);

				return settlementRef.set({ population }, { merge: true });
			})
			.catch(err => console.warn(err));

		// console.log(ref.get('name'));

		// console.log(settlementRef.data());
		// console.log('population');
		// console.log(settlementRef.child('population'));

		// console.log(snap.ref().parent().data());
		// const settlementRef = snap.ref.parent.parent;
		// console.log('settlementRef', settlementRef.child('population'));
		// console.log('settlementRef', settlementRef.population));
		// console.log('population');
		// console.log(settlementRef.child('population'));
		// console.log(settlementID);
		// console.log(survivorsID);
		// console.log(collectionRef.parent.data);
		// console.log(collectionRef.parent.data());
		// console.log(collectionRef.parent.child('population'));
		// const countRef = collectionRef.population;
		// console.log('pop 1', countRef);
		// console.log('pop 2', collectionRef.parent.child('population'));
		// return true;
		// return admin
		// 	.firestore()
		// 	.collection('messages')
		// 	.add({ original: original })
		// 	.then(writeResult => {
		// 		// Send back a message that we've succesfully written the message
		// 		return res.json({
		// 			result: `Message with ID: ${writeResult.id} added.`,
		// 		});
		// 	});
	});

// exports.recountPopulation = functions.database.ref('/posts/{postid}/likes_count').onDelete((snap) => {
//   const counterRef = snap.ref;
//   const collectionRef = counterRef.parent.child('likes');

//   // Return the promise from counterRef.set() so our function
//   // waits for this async event to complete before it exits.
//   return collectionRef.once('value')
//       .then((messagesData) => counterRef.set(messagesData.numChildren()));
// });

// [START addMessage]
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:documentId/original
// [START addMessageTrigger]
exports.addMessage = functions.https.onRequest((req, res) => {
	// [END addMessageTrigger]
	// Grab the text parameter.
	const original = req.query.text;
	// [START adminSdkAdd]
	// Push the new message into the Realtime Database using the Firebase Admin SDK.
	return admin
		.firestore()
		.collection('messages')
		.add({ original: original })
		.then(writeResult => {
			// Send back a message that we've succesfully written the message
			return res.json({ result: `Message with ID: ${writeResult.id} added.` });
		});
	// [END adminSdkAdd]
});
// [END addMessage]

// [START makeUppercase]
// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
// [START makeUppercaseTrigger]
exports.makeUppercase = functions.firestore
	.document('/messages/{documentId}')
	.onCreate((snap, context) => {
		// [END makeUppercaseTrigger]
		// [START makeUppercaseBody]
		// Grab the current value of what was written to the Realtime Database.
		// console.log(snap);
		const original = snap.data().original;
		console.log('Uppercasing', context.params.documentId, original);
		const uppercase = original.toUpperCase();
		// You must return a Promise when performing asynchronous tasks inside a Functions such as
		// writing to the Firebase Realtime Database.
		// Setting an 'uppercase' sibling in the Realtime Database returns a Promise.
		return snap.ref.set({ uppercase }, { merge: true });
		// [END makeUppercaseBody]
	});
// [END makeUppercase]
// [END all]
