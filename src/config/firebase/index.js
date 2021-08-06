import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyChyxCQhD3BD-BzMhN9rJ6rDSQQdKNLhaY",
  authDomain: "reactjs-note-firebase.firebaseapp.com",
  projectId: "reactjs-note-firebase",
  storageBucket: "reactjs-note-firebase.appspot.com",
  messagingSenderId: "193563359226",
  appId: "1:193563359226:web:c78dafb94cb12a8f2e1643",
  measurementId: "G-ZZMCYTSLBM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
