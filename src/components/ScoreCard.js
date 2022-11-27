import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "components/Quiz.module.css";
import Card from "components/UI/Card";
import Button from "components/UI/Button";
import { useData } from "context/DataContext";
import { ErrorModal } from "components/UI/ErrorModal";

export const ScoreCard = ({ value, category, difficulty, scoreValue }) => {
  const [error, setError] = useState();
  const { inputData, name, isLogin } = useData();
  const navigate = useNavigate();

  const errorHandlerAddScoreBtn = () => {
    if (!isLogin()) {
      setError({
        title: "USER LOG IN ERROR",
        message: "PLEASE LOG IN OR SIGN UP TO ADD SCORE TO THE SCOREBOARD",
      });
    }
  };

  const errorHandlerViewScoreBoardBtn = () => {
    if (!isLogin()) {
      setError({
        title: "USER LOG IN ERROR",
        message: "PLEASE LOG IN OR SIGN UP TO VIEW SCOREBOARD",
      });
    } else {
      navigate("/scoreboard");
    }
  };

  //function define in DataContext.js allow to add data to firebase and display on the ScoreBoard
  function addToScoreCard() {
    if (isLogin()) {
      inputData(name, difficulty, category, scoreValue);
      navigate("/scoreboard");
    } else {
      errorHandlerAddScoreBtn();
    }
  }

  return (
    <Card>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Link to="/">
        <Button className={classes.scoreBoard_homeBtm}>Homepage</Button>
      </Link>
      <div className={classes.scoreBoard}>
        <h2>YOUR SCORE</h2>
        <h2>{value} %</h2>
        <Link to="/quiz">
          <Button className={classes.scoreBoardBtm}>START NEW QUIZ</Button>
        </Link>
        <Button className={classes.scoreBoardBtm} onClick={addToScoreCard}>
          ADD TO SCORECARD
        </Button>
        <Button
          className={classes.scoreBoardBtm}
          onClick={errorHandlerViewScoreBoardBtn}
        >
          SCORE LIST
        </Button>
      </div>
    </Card>
  );
};
