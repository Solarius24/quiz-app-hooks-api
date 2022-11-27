import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCRlBghfAPmA916o8pLJWpXnNKsoDeZPJg",
  authDomain: "auth-development-d7045.firebaseapp.com",
  projectId: "auth-development-d7045",
  storageBucket: "auth-development-d7045.appspot.com",
  messagingSenderId: "31242458352",
  appId: "1:31242458352:web:4e1ea32ee721de7dd41e35",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const ScoreListData = collection(db, "ScoreList");
