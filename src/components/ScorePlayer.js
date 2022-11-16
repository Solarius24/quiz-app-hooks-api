import React from "react";
import classes from './ScoreBoard.module.css'

const ScorePlayer = ({ quizData }) => {
  console.log(quizData)
  if (quizData === []) {
    return;
  } else {
    const renderPlayerScore = quizData.map((player) => {
      const name = player.name;
      const scoreValue = player.scoreValue;
      const category = player.category;
      const difficulty = player.difficulty;
      return (
        <tbody>
        <tr className={classes.score_container}>
          <td>0</td>
          <td>{name}</td>
          <td>{scoreValue}</td>
          <td>{category}</td>
          <td>{difficulty}</td>
        </tr>
        </tbody>
      );
    });

    return <>{renderPlayerScore}</>;
  }
};

export default ScorePlayer;
