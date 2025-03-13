// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYAHgtdmhqPuR45kXyV6u3DZV8tHstvoo",
    authDomain: "shootinggame-1234.firebaseapp.com",
    projectId: "shootinggame-1234",
    storageBucket: "shootinggame-1234.firebasestorage.app",
    messagingSenderId: "155025059697",
    appId: "1:155025059697:web:df733f9fe3c81a257690d0",
    measurementId: "G-HNS56H8NE4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
