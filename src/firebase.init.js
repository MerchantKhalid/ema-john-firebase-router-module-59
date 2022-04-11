// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSIEk-AzO8QwVuxpo16Ioo4PWBKNrQ--Y",
  authDomain: "ema-john-simple-fcd40.firebaseapp.com",
  projectId: "ema-john-simple-fcd40",
  storageBucket: "ema-john-simple-fcd40.appspot.com",
  messagingSenderId: "758421052557",
  appId: "1:758421052557:web:f3909e926492fcaa7496c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;