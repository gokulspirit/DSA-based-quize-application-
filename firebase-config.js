const firebaseConfig = {
  apiKey: "AIzaSyBRJkkuMojNk0NDjZiLAW76_nL-3XcG7Jc",
    authDomain: "dsa-based-quize-applicat-90394.firebaseapp.com",
    projectId: "dsa-based-quize-applicat-90394",
    storageBucket: "dsa-based-quize-applicat-90394.firebasestorage.app",
    messagingSenderId: "934060030519",
    appId: "1:934060030519:web:3b54f93b794819602b9db2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
