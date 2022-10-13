// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAO1UltJ3w_L0PihYZh5yOAqc3tZzKMjlY",
    authDomain: "sinistersix-a7294.firebaseapp.com",
    projectId: "sinistersix-a7294",
    storageBucket: "sinistersix-a7294.appspot.com",
    messagingSenderId: "1001256148525",
    appId: "1:1001256148525:web:dc4e6af2b971c3d8b4a2a4",
    measurementId: "G-SLWEFXJ12L"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();

export default firebase;