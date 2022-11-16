import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Quiz.module.css";
import Card from "../components/UI/Card";
import Button from "./UI/Button";

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
    const userData = {
      name: name,
      category: category,
      difficulty: difficulty,
      scoreValue: scoreValue,
    };

    setQuizData((prevQuizData) => {
      return [userData, ...prevQuizData];
    });
  };

  console.log(quizData);

  useEffect(() => {
    if (quizData === null) localStorage.setItem("quiz1", JSON.stringify([{}]));
    else {
      setAppUserData(quizData);
      localStorage.setItem("quiz1", JSON.stringify(quizData));
    }
  });

  return (
    <Card>
      <Link to="/">
        <Button className={classes.scoreBoard_homeBtm}>Homepage</Button>
      </Link>
      <div className={classes.scoreBoard}>
        <h2>YOUR SCORE</h2>
        <h2>{value} %</h2>
        <Link to="/quiz">
          <Button className={classes.scoreBoardBtm}>START NEW QUIZ</Button>
        </Link>
        <Button className={classes.scoreBoardBtm} onClick={quizDataHandler}>
          ADD TO SCORECARD
        </Button>
        <Link to="/scorelist">
          <Button className={classes.scoreBoardBtm}>SCORE LIST</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ScoreCard;
