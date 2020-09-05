import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBML3E2IJjFcCAj9uGYKRP0z9_GjepYLGQ",
  authDomain: "fb-clone-549e6.firebaseapp.com",
  databaseURL: "https://fb-clone-549e6.firebaseio.com",
  projectId: "fb-clone-549e6",
  storageBucket: "fb-clone-549e6.appspot.com",
  messagingSenderId: "893403354072",
  appId: "1:893403354072:web:a36f377ac93535592d18ad",
  measurementId: "G-04D5QX94PS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
