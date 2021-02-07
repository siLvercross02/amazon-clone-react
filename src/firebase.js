// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyByDK7ddMEljNrLr0KMCg5Ibg7WXfIg5Ok",
    authDomain: "clone-a6e07.firebaseapp.com",
    projectId: "clone-a6e07",
    storageBucket: "clone-a6e07.appspot.com",
    messagingSenderId: "315792684886",
    appId: "1:315792684886:web:5cd056f19eec89699588f7",
    measurementId: "G-5L0DZQJL0E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

