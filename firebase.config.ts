// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_Da2hEh-uW--2PD9mC4i-_u60-TEMk0",
  authDomain: "care-5e2d6.firebaseapp.com",
  projectId: "care-5e2d6",
  storageBucket: "care-5e2d6.firebasestorage.app",
  messagingSenderId: "912201237977",
  appId: "1:912201237977:web:eaf1257351b6b930d145c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };