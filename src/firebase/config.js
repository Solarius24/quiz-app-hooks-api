import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Timestamp} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAhGMkXFwSnU6c0AHgwK1_qaESQu6uquPE",
  authDomain: "quiz-app-33a69.firebaseapp.com",
  projectId: "quiz-app-33a69",
  storageBucket: "quiz-app-33a69.appspot.com",
  messagingSenderId: "843722717161",
  appId: "1:843722717161:web:2ea9a609ee20c8ef007d78"
};

//init firebase
export const app = initializeApp(firebaseConfig);
//init service
//projectFirestore
export const db = getFirestore(app)
//project Auth
export const auth = getAuth(app)
//timestamp
export const timestamp = Timestamp


