import firebase from 'firebase';

if (!firebase.apps.length) {
  // Initialize Firebase
  const config = {
  };
  firebase.initializeApp(config);
}

export default firebase
