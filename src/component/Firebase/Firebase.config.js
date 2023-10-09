/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtfSjoSUmKnW-O3Eu5-l6XSQ_gtJxrr84",
    authDomain: "event-management-b.firebaseapp.com",
    projectId: "event-management-b",
    storageBucket: "event-management-b.appspot.com",
    messagingSenderId: "102286316970",
    appId: "1:102286316970:web:412ddafd94b437551547d3"
  };

// Initialize Firebase
const   app = initializeApp(firebaseConfig);
export default app;

