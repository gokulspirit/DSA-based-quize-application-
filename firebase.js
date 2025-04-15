
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqjpKtYOMPpdp93nY-LQn569pw6c-CsbQ",
  authDomain: "real-225f0.firebaseapp.com",
  projectId: "real-225f0",
  storageBucket: "real-225f0.appspot.com",
  messagingSenderId: "333960580528",
  appId: "1:333960580528:web:2fd8e0cf1eab6cdd909a75"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db, doc, setDoc, getDoc, collection, addDoc };
