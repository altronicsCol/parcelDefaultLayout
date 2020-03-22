require("firebase/firestore");
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAiLzcX_T6dz0ZvdwfSqqQKTvGyOyNJu6U",
  authDomain: "react-firebase-9c4e5.firebaseapp.com",
  databaseURL: "https://react-firebase-9c4e5.firebaseio.com",
  projectId: "react-firebase-9c4e5",
  storageBucket: "react-firebase-9c4e5.appspot.com",
  messagingSenderId: "941770031104",
  appId: "1:941770031104:web:c95ad3aedcd7aef35418e5",
  measurementId: "G-XTYG4J15L4"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db; 