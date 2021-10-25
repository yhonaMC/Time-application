import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrBiqseRCLdA_0nTSbrTCXP3ZUWdL59IY",
  authDomain: "time-application-cdb16.firebaseapp.com",
  projectId: "time-application-cdb16",
  storageBucket: "time-application-cdb16.appspot.com",
  messagingSenderId: "115765194990",
  appId: "1:115765194990:web:da67f85a95e358017543ff",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
