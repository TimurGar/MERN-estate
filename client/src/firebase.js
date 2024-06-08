// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate2024.firebaseapp.com",
  projectId: "mern-estate2024",
  storageBucket: "mern-estate2024.appspot.com",
  messagingSenderId: "46344364171",
  appId: "1:46344364171:web:3e67262b2b7a40ea3bb48e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
