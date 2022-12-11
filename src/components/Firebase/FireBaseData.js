import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAhGMkXFwSnU6c0AHgwK1_qaESQu6uquPE",
  authDomain: "quiz-app-33a69.firebaseapp.com",
  projectId: "quiz-app-33a69",
  storageBucket: "quiz-app-33a69.appspot.com",
  messagingSenderId: "843722717161",
  appId: "1:843722717161:web:2ea9a609ee20c8ef007d78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const ScoreListData = collection(db, "ScoreList");
