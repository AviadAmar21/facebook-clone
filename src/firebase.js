import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyATl0BzRdFvvA0OdIOhgEGNqFzMtNqqgQA",
    authDomain: "facebook-clone-5bbb5.firebaseapp.com",
    projectId: "facebook-clone-5bbb5",
    storageBucket: "facebook-clone-5bbb5.appspot.com",
    messagingSenderId: "570519278335",
    appId: "1:570519278335:web:2d7f0ff9fe5826891772ca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
