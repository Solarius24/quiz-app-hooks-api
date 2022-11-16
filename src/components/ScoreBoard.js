import React from "react";
import classes from "./ScoreBoard.module.css";
import ScorePlayer from "./ScorePlayer";
import { Link } from "react-router-dom";
import Card from ".//UI/Card";
import Button from "./UI/Button";

const ScoreBoard = ({ quizData }) => {
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
      <ScorePlayer quizData={quizData} />
      <Link to="/">
        <Button className={classes.scoreBoardBtm}>HOMEPAGE</Button>
      </Link>
    </Card>
  );
};

export default ScoreBoard;
