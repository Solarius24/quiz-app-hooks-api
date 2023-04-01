import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../scoreCard/ScoreCard.module.css";
import Button from "components/UI/Button";
import { useAuthContext} from "context/AuthContext";
import { ErrorModal } from "components/UI/ErrorModal";
import useFirestore from "hooks/useFirestore";
import { Container,Card } from "react-bootstrap";

export const ScoreCard = ({ value, category, difficulty, scoreValue }) => {
  const [error, setError] = useState();
  const {addDocument} = useFirestore("score")
  const currentUser = useAuthContext()
  const navigate = useNavigate();

  const errorHandlerAddScoreBtn = () => {
    if (!currentUser) {
      setError({
        title: "USER LOG IN ERROR",
        message: "PLEASE LOG IN OR SIGN UP TO ADD SCORE TO THE SCOREBOARD",
      });
    }
  };

  const errorHandlerViewScoreBoardBtn = () => {
    if (!currentUser) {
      setError({
        title: "USER LOG IN ERROR",
        message: "PLEASE LOG IN OR SIGN UP TO VIEW SCOREBOARD",
      });
    } else {
      navigate("/scoreboard");
    }
  };


  //function define in DataContext.js allow to add data to firebase and display on the ScoreBoard
  function addToScoreBoard() {
    if (currentUser) {
      const score = {
        playerName: currentUser.displayName,
        score:scoreValue,
        category:category,
        difficultyLevel:difficulty,
      }

      addDocument(score);
      navigate("/scoreboard");
    } else {
      errorHandlerAddScoreBtn();
    }
  }

  return (
    <Container>
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
      
      <Card className={classes.scoreBoard}>
        <h2>YOUR SCORE:</h2>
        <h2>{value} %</h2>
        <Link to="/quiz">
          <Button className={classes.scoreBoardBtm}>START NEW QUIZ</Button>
        </Link>
        <Button className={classes.scoreBoardBtm} onClick={addToScoreBoard}>
          ADD TO SCOREBOARD
        </Button>
        <Button
          className={classes.scoreBoardBtm}
          onClick={errorHandlerViewScoreBoardBtn}
        >
          VIEW SCORE BOARD
        </Button>
      </Card>

    </Container>
  );
};
