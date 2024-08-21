// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN4wGCvriMLoVy8c2YbC2g2YnN8dByYDE",
  authDomain: "blink-basket-store.firebaseapp.com",
  projectId: "blink-basket-store",
  storageBucket: "blink-basket-store.appspot.com",
  messagingSenderId: "241526417380",
  appId: "1:241526417380:web:8872584a43dfa3feb2c9f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();