import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./ScoreBoard.module.css";
import CardBg from "components/UI/CardBg";
import Button from "components/UI/Button";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useCollection } from "hooks/useCollection";

export const ScoreBoard = () => {
  const [data, setData] = useState();
  const [order, setOrder] = useState("ASC");
  const {documents} = useCollection("score")

  // const ScoreListData = collection(db, "score");

  // useEffect(() => {
  //   async function getScoreData() {
  //     const Snapshot = await getDocs(ScoreListData);
  //     const score = Snapshot.docs.map((doc) => doc.data());
  //     setData(score);
  //   }
  //   getScoreData();
  // }, []);

  // if (data === undefined) {
  //   return;
  // } else {
  //   const sorting = (col) => {
  //     if (order === "ASC") {
  //       const sorted = [...data].sort((a, b) =>
  //         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //       );
  //       setData(sorted);
  //       setOrder("DSC");
  //     }
  //     if (order === "DSC") {
  //       const sorted = [...data].sort((a, b) =>
  //         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //       );
  //       setData(sorted);
  //       setOrder("ASC");
  //     }
  //   };

    // const sortingScore = (col) => {
    //   if (order === "ASC") {
    //     const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
    //     setData(sorted);
    //     setOrder("DSC");
    //   }
    //   if (order === "DSC") {
    //     const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
    //     setData(sorted);
    //     setOrder("ASC");
    //   }
    // };

    return (
      <CardBg>
        <table className={classes.container}>
          <thead>
            <tr className={classes.header_container}>
              <th
                // onClick={() => {
                //   sorting("date");
                // }}
              >
                Data
              </th>
              <th
                // onClick={() => {
                //   sorting("playerName");
                // }}
              >
                Player Name
              </th>
              <th
                // onClick={() => {
                //   sortingScore("score");
                // }}
              >
                Score
              </th>
              <th
                // onClick={() => {
                //   sorting("category");
                // }}
              >
                Category
              </th>
              <th
                // onClick={() => {
                //   sorting("difficultyLevel");
                // }}
              >
                Difficulty Level
              </th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((player) => (
                <tr key={player.id} className={classes.score_container}>
                  <td>{player.createdAt.toDate().toDateString()}</td>
                  <td>{player.playerName}</td>
                  <td>{player.score}</td>
                  <td>{player.category}</td>
                  <td>{player.difficultyLevel}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Link to="/">
          <Button className={classes.scoreBoardBtm}>HOMEPAGE</Button>
        </Link>
      </CardBg>
    );
  // }
};
