import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3JVmGUDTMcmhAXPO1CHSaY8u390pkm8s",
  authDomain: "slack-clone-5ce63.firebaseapp.com",
  projectId: "slack-clone-5ce63",
  storageBucket: "slack-clone-5ce63.appspot.com",
  messagingSenderId: "584733568123",
  appId: "1:584733568123:web:163dee15d7c9f285f246de",
  measurementId: "G-6SH02N1BG5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;