import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAhGMkXFwSnU6c0AHgwK1_qaESQu6uquPE",
  authDomain: "quiz-app-33a69.firebaseapp.com",
  projectId: "quiz-app-33a69",
  storageBucket: "quiz-app-33a69.appspot.com",
  messagingSenderId: "843722717161",
  appId: "1:843722717161:web:2ea9a609ee20c8ef007d78",
});

export const auth = app.auth();
export default app;
