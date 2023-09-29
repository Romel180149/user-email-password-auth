// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVUySwkjFkOU8rFLEuAXZDTKMGAk6tw8",
  authDomain: "user-email-password-auth-ee4da.firebaseapp.com",
  projectId: "user-email-password-auth-ee4da",
  storageBucket: "user-email-password-auth-ee4da.appspot.com",
  messagingSenderId: "1027086861698",
  appId: "1:1027086861698:web:62585b0b098f68bb2efb9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;