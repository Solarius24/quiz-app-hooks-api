import React from "react";
import "./ScoreBoard.css";
import ScorePlayer from "./ScorePlayer";
import { Link } from "react-router-dom";

const ScoreBoard = ({ quizData }) => {
  console.log(quizData);

  return (
    <>
      <tbody className="board_container">
        <tr className="header_container">
          <th>Data</th>
          <th>Player Name</th>
          <th>Score</th>
          <th>Category</th>
          <th>Difficulty Level</th>
        </tr>
        <ScorePlayer quizData={quizData} />
        <Link to="/" className="homeBtn scoreBtn">
          Home
        </Link>
      </tbody>
    </>
  );
};

export default ScoreBoard;
