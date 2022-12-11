import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./ScoreBoard.module.css";
import Card from "components/UI/Card";
import Button from "components/UI/Button";
// import { useData } from "context/DataContext";
import { ScoreListData } from "../components/Firebase/FireBaseData";
import { getDocs } from "firebase/firestore";

export const ScoreBoard = () => {
  const [data, setData] = useState();
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    async function getScoreData() {
      const Snapshot = await getDocs(ScoreListData);
      const score = Snapshot.docs.map((doc) => doc.data());
      setData(score);
    }
    getScoreData();
  }, []);

  if (data === undefined) {
    return;
  } else {
    const sorting = (col) => {
      if (order === "ASC") {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sorted = [...data].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("ASC");
      }
    };

    const sortingScore = (col) => {
      if (order === "ASC") {
        const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
        setData(sorted);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
        setData(sorted);
        setOrder("ASC");
      }
    };
    return (
      <Card>
        <table>
          <thead>
            <tr className={classes.header_container}>
              <th
                onClick={() => {
                  sorting("date");
                }}
              >
                Data
              </th>
              <th
                onClick={() => {
                  sorting("playerName");
                }}
              >
                Player Name
              </th>
              <th
                onClick={() => {
                  sortingScore("score");
                }}
              >
                Score
              </th>
              <th
                onClick={() => {
                  sorting("category");
                }}
              >
                Category
              </th>
              <th
                onClick={() => {
                  sorting("difficultyLevel");
                }}
              >
                Difficulty Level
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((player) => (
              <tr key={player.id} className={classes.score_container}>
                <td>{player.date}</td>
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
      </Card>
    );
  }
};
