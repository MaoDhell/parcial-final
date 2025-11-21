// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUi2J7JaiHz2zAyLuWa-Hfu1tL3fJMzd4",
  authDomain: "parcial-final-fffed.firebaseapp.com",
  projectId: "parcial-final-fffed",
  storageBucket: "parcial-final-fffed.firebasestorage.app",
  messagingSenderId: "585470778164",
  appId: "1:585470778164:web:0c57fc0e280cd758922361",
  measurementId: "G-SW71HN4F3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);