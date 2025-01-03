


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDN6fvlBhZ0kvAXg9E9PP8xjzFpTthMaBM",
  authDomain: "fir-course-8f916.firebaseapp.com",
  projectId: "fir-course-8f916",
  storageBucket: "fir-course-8f916.firebasestorage.app",
  messagingSenderId: "488364998548",
  appId: "1:488364998548:web:df716b924c04820ec05981",
  measurementId: "G-VHQQTWE9YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)