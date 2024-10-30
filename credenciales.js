// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXUKD-96Q3vkQLw-ZFBdlIzc9_ncN2TiE",
  authDomain: "smart-345cd.firebaseapp.com",
  projectId: "smart-345cd",
  storageBucket: "smart-345cd.appspot.com",
  messagingSenderId: "418981950632",
  appId: "1:418981950632:web:65c0eea5b73db975a97e9d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;