import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const ScoreCard = ({ value, questionIndex }) => {
  return (
    <>
      <nav>
        <ul>
          <li className="homeBtn">
            <Link to="/" className="homeBtn">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <div className="quiz-container">
        <h2>YOUR SCORE</h2>
        <h2>{value} %</h2>
        <Link to="/quiz">
          <button>START NEW QUIZ</button>
        </Link>
      </div>
    </>
  );
};

export default ScoreCard;
