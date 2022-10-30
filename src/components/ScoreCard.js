import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const ScoreCard = ({
  value,
  name,
  category,
  difficulty,
  scoreValue,
  setAppUserData,
}) => {
  const [quizData, setQuizData] = useState(
    JSON.parse(localStorage.getItem("quiz1"))
  );

  const quizDataHandler = () => {
    const userData = 
      {
        name: name,
        category: category,
        difficulty: difficulty,
        scoreValue: scoreValue,
      }
    

    setQuizData((prevQuizData) => {
      return [userData, ...prevQuizData];
    });
  };

  useEffect(() => {
    localStorage.setItem("quiz1", JSON.stringify(quizData));
    setAppUserData(quizData)
  }, [quizData]);

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

          <button onClick={quizDataHandler}>ADD TO SCORECARD</button>
    
      </div>
    </>
  );
};

export default ScoreCard;
