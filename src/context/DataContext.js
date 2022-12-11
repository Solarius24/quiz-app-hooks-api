import React, { useContext, useEffect, useState } from "react";
import { addDoc, getDocs } from "firebase/firestore";
import { ScoreListData } from "../components/Firebase/FireBaseData";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const DataContext = React.createContext();

//custom hook from useContext as a lisner in onther componenets, instead of useContext
export function useData() {
  return useContext(DataContext);
}

 export function DataProvider({ children }) {
  //function to send user input data to firebase any time user click add button,
  //to score card button in ScoreCard component
  const [scoreDataFirebase, setScoreDataFirebase] = useState();
  const [name, setName] = useState();

  //confirmation from firebase if user is login or logout

  function isLogin() {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }

//function to send all data from quiz game to frirebase and display on the ScoreBoard

  function inputData(name, difficulty, category, scoreValue) {
    addDoc(ScoreListData, {
      date: new Date().toUTCString(),
      playerName: name,
      difficultyLevel: difficulty,
      category: category,
      score: scoreValue
    });
  }

  //function to fetch user score data from firebase to ScoreBoard component
  
  useEffect(function fireBaseData() {
    async function getScoreData() {
      const Snapshot = await getDocs(ScoreListData);
      const score = Snapshot.docs.map((doc) => doc.data());
      setName(firebase.auth().currentUser.displayName);
      setScoreDataFirebase(score);
    }
    getScoreData();
  });

  const value = {
    inputData,
    scoreDataFirebase,
    isLogin,
    name,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}


