import firebase from 'firebase';

if (!firebase.apps.length) {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAskYpbPGlyovzshOhLifg3SmETal3yZIA",
    authDomain: "planet-pluto-local.firebaseapp.com",
    databaseURL: "https://planet-pluto-local.firebaseio.com",
    projectId: "planet-pluto-local",
    storageBucket: "planet-pluto-local.appspot.com",
    messagingSenderId: "402255219393"
  };
  firebase.initializeApp(config);
}

export default firebase
