import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ctu-support-63101.firebaseapp.com",
  projectId: "ctu-support-63101",
  storageBucket: "ctu-support-63101.appspot.com",
  messagingSenderId: "520171688871",
  appId: "1:520171688871:web:b34b05c568f1226a7d5c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()