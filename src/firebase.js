// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX8b0IVozflxy9nmHUtkiKZ78k7UsVwOM",
    authDomain: "webapp-ca.firebaseapp.com",
    projectId: "webapp-ca",
    storageBucket: "webapp-ca.appspot.com",
    messagingSenderId: "609624223740",
    appId: "1:609624223740:web:6c97c23444fe0957018c79",
    measurementId: "G-ZRCGDSCV2K"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)