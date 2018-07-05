# Firebase

_TODO expand these docs_

## Firestore

[Firestore](https://firebase.google.com/docs/firestore/) is the realtime database that holds all of our data. It's built for speed and data sync. We use vuefire v2 to manage all of the data bindings for us.

### Notes

- Currently there are no roles. We should add them
- Currently everyone can see everything. We should set up settlement permissions

## Functions

[Firebase functions](https://firebase.google.com/docs/functions/) are used to update the database with async tasks. We use functions to seperate some of the logic from the ui.
