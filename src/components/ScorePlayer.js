import React from "react";

const ScorePlayer = ({ quizData }) => {
  console.log(quizData)
  const renderPlayerScore = quizData.map((player) => {
    const name = player.name
    console.log(name)
    const scoreValue = player.scoreValue;
    const category = player.category;
    const difficulty = player.difficulty;
    return (
      <tr className="score_container">
        <td>0</td>
        <td>{name}</td>
        <td>{scoreValue}</td>
        <td>{category}</td>
        <td>{difficulty}</td>
      </tr>
    );
  });

  return <>{renderPlayerScore}</>;
};

export default ScorePlayer;
