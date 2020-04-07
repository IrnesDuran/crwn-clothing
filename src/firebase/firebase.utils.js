import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDywvkLEAaGPMs7TyCsmc0BUgXO7IuzJpo",
  authDomain: "crwnecomdb.firebaseapp.com",
  databaseURL: "https://crwnecomdb.firebaseio.com",
  projectId: "crwnecomdb",
  storageBucket: "crwnecomdb.appspot.com",
  messagingSenderId: "374230916259",
  appId: "1:374230916259:web:81191b684a92b9d5383316",
  measurementId: "G-18DJ05QB5T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
