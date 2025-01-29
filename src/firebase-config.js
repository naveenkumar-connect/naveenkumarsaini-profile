import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLn8QCZ5VQYjAptwwWAFfo6YmGf69urgs",
    authDomain: "my-profile-nks.firebaseapp.com",
    projectId: "my-profile-nks",
    storageBucket: "my-profile-nks.firebasestorage.app",
    messagingSenderId: "25796018352",
    appId: "1:25796018352:web:b0b601c5d2958ae3063b75",
    measurementId: "G-XMHY9CPNPL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
