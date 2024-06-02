// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApjZ3vKX7zjyITR5m8kdkbjNgC7XEbjro",
    authDomain: "productivity-app-cfdec.firebaseapp.com",
    projectId: "productivity-app-cfdec",
    storageBucket: "productivity-app-cfdec.appspot.com",
    messagingSenderId: "353998634024",
    appId: "1:353998634024:web:8fa0f9ce93d318ef80891d",
    measurementId: "G-459EVDXVSC"
  };
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);