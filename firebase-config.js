const firebaseConfig = {
  apiKey: "AIzaSyBqjpKtYOMPpdp93nY-LQn569pw6c-CsbQ",
  authDomain: "real-225f0.firebaseapp.com",
  projectId: "real-225f0",
  storageBucket: "real-225f0.appspot.com",
  messagingSenderId: "333960580528",
  appId: "1:333960580528:web:2fd8e0cf1eab6cdd909a75"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
