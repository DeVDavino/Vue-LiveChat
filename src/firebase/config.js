import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCF5kwowImgUWTVaJCQmyC-by2tdteHPFo",
    authDomain: "ikfram---portfolio.firebaseapp.com",
    projectId: "ikfram---portfolio",
    storageBucket: "ikfram---portfolio.appspot.com",
    messagingSenderId: "1023359859479",
    appId: "1:1023359859479:web:85b326fd5afa23a3799552"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init authentication serivce
const projectAuth = firebase.auth();

// init firestore service
const projectFirestore = firebase.firestore();
// timestamp for the chat events
const timespamp = firebase.firestore.FieldValue.serverTimestamp();

// exporting firestore service and timestamp
export {projectFirestore, projectAuth, timespamp};