import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewQuestion } from "components/NewQuestion";
import classes from "./Quiz.module.css";
import { Loader } from "components/Loader";
import Button from "components/UI/Button";
import Card from "components/UI/CardBg";
import { useAuthContext} from "context/AuthContext";
import { useGetQuizData } from "hooks/useGetQuizData";
import { ErrorModal } from "components/UI/ErrorModal";

export const Quiz = ({ setScoreValue, category, difficulty, newUserName }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  // to ensure that user select an answer, if not he cannot submit form
  const [answerChecked, setAnswerChecked] = useState(false); 
  const [error, setError] = useState();
  const [value, setValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();

  //custom hook to fetch quiz data (questions) from API
  const dataApi = useGetQuizData(difficulty, category);

  //name of user who is log in received from firebase
  const  currentUser  = useAuthContext();

  const submitQuestionHandler = () => {
    if (questionIndex < 9 && answerChecked === true) {
      setQuestionIndex(questionIndex + 1);
      setAnswerChecked(false);
      if (userAnswer === dataApi[questionIndex].correct_answer) {
        setValue(value + 10);
        setScoreValue(value);
      }
    }
    if (questionIndex < 9 && answerChecked === false) {
      setError({
        title: "ANSWER NOT SELECTED",
        message: "PLEASE SELECT ANSWER AND SUBMIT",
      });
    }

    if (questionIndex >= 9) {
      return navigate("/quiz/score");
    }
  };

  if (dataApi === null || dataApi.length === 0) {
    return (
      <Card>
        < Loader/>
      </Card>
    );
  } else if (dataApi.length > 0) {
    return (
      <>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={() => setError(null)}
          />
        )}
        <Card>
          <header>
            <Link to="/">
              <Button className={classes.homePageBtm} onClick={() => null}>
                HomePage
              </Button>
            </Link>
            <div className={classes.player_name}>
              PLAYER NAME: {currentUser ? currentUser.displayName : newUserName}
            </div>
          </header>
          <div className={classes.quiz_container}>
            <h2 className={classes.quiz_container_h2}>
              {questionIndex + 1}/10
            </h2>
            <NewQuestion
              dataApi={dataApi[questionIndex]}
              setUserAnswer={setUserAnswer}
              setAnswerChecked={setAnswerChecked}
            />
            <Button
              className={classes.submitBtm}
              onClick={submitQuestionHandler}
            >
              Submit
            </Button>
          </div>
        </Card>
      </>
    );
  }
};
