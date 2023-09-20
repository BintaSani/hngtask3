import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const Config = {
    apiKey: "AIzaSyADzynGTZyFgzoBQHxbrQEd25F-yOqnDYU",
    authDomain: "image-gallery-37e1c.firebaseapp.com",
    projectId: "image-gallery-37e1c",
    storageBucket: "image-gallery-37e1c.appspot.com",
    messagingSenderId: "569650034831",
    appId: "1:569650034831:web:c00863f2bb6d3ceb3318fa",
    measurementId: "G-CN01PN4MDL"
};


  
  // Initialize Firebase
firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
