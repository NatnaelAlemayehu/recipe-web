import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvVVXRiP9JLDcQotCH8PAEKc8eNHjNH74",
    authDomain: "recipes4all-31fbc.firebaseapp.com",
    databaseURL: "https://recipes4all-31fbc-default-rtdb.firebaseio.com",
    projectId: "recipes4all-31fbc",
    storageBucket: "recipes4all-31fbc.appspot.com",
    messagingSenderId: "946790278739",
    appId: "1:946790278739:web:1fab59178eeb405a1e88a6",
    measurementId: "G-7L3WR6VR5D"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();
export default firebase;