// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCObqki7PORJtq0ylenR-a6aP4n_Of_mh0",
  authDomain: "guerrero-my-app.firebaseapp.com",
  projectId: "guerrero-my-app",
  storageBucket: "guerrero-my-app.appspot.com",
  messagingSenderId: "584088862612",
  appId: "1:584088862612:web:26a8bc255170ed09d91981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const collectionProd = collection(db, 'productos');