import firebase from 'firebase/app';
import  "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVXwV-qHTSW0NAJEnHF-VVoSGZm1haGrg",
    authDomain: "signal-clone-484ee.firebaseapp.com",
    projectId: "signal-clone-484ee",
    storageBucket: "signal-clone-484ee.appspot.com",
    messagingSenderId: "635442420572",
    appId: "1:635442420572:web:b03ed706d7689fd36e7f99"
  };


firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth}