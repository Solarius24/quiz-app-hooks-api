import React from "react";
import { Link} from "react-router-dom";
import classes from "./ScoreBoard.module.css";
import Card from "components/UI/Card";
import Button from "components/UI/Button";
import { useData } from "context/DataContext";

export const ScoreBoard = () => {
  const { scoreDataFirebase } = useData();
  console.log(scoreDataFirebase)
  const quizData = scoreDataFirebase.slice(0,5);

  if (quizData === undefined) {
    return;
  } else {
    const renderPlayerScore = quizData.map((player) => {
      const date = player.date;
      const name = player.playerName;
      const scoreValue = player.score;
      const category = player.category;
      const difficulty = player.difficultyLevel;
      return (
        <tbody>
          <tr className={classes.score_container}>
            <td>{date}</td>
            <td>{name}</td>
            <td>{scoreValue}</td>
            <td>{category}</td>
            <td>{difficulty}</td>
          </tr>
        </tbody>
      );
    });

    return (
      <Card>
        <table>
          <thead>
            <tr className={classes.header_container}>
              <th>Data</th>
              <th>Player Name</th>
              <th>Score</th>
              <th>Category</th>
              <th>Difficulty Level</th>
            </tr>
          </thead>
        </table>
        <>{renderPlayerScore}</>;
        <Link to="/">
          <Button className={classes.scoreBoardBtm}>HOMEPAGE</Button>
        </Link>
      </Card>
    );
  }
};

