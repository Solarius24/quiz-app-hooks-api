import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewQuestion } from "./NewQuestion";
import classes from "./Quiz.module.css";
import { Loader } from "./Loader";
import { Link, useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import Card from "./UI/Card";

const Quiz = ({ setScoreValue, category, difficulty, name }) => {
  const [dataApi, setDataApi] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const linker = () => {
      if (category === "any" && difficulty === "any") {
        return `https://opentdb.com/api.php?amount=10`;
      } else if (category === "any" && difficulty !== "any") {
        return `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
      } else if (category !== "any" && difficulty === "any") {
        return `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`;
      } else {
        return `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
      }
    };

    const dataFetch = async () => {
      const data = await axios.get(`${linker()}`);
      const dataApiNew = data.data.results;
      setDataApi(dataApiNew);
    };
    dataFetch();
    // const myTimeout =() => setTimeout(dataFetch, 2000);
    // myTimeout()
  }, [category, difficulty]);

  const click = () => {
    if (questionIndex < 9) {
      setQuestionIndex(questionIndex + 1);
      if (userAnswer === dataApi[questionIndex].correct_answer) {
        setValue(value + 10);
        setScoreValue(value);
      }
    }
    if (questionIndex >= 9) {
      return navigate("/quiz/score");
    }
  };

  if (dataApi === null || dataApi.length === 0) {
    return (
      <Card>
        <Loader />
      </Card>
    );
  } else if (dataApi.length > 0) {
    return (
      <Card>
        <header>
          <Link to="/">
            <Button className={classes.homePageBtm}>HomePage</Button>
          </Link>
          <div className={classes.player_name}>PLAYER NAME: {name}</div>
        </header>
        <div className={classes.quiz_container}>
          <h2 className={classes.quiz_container_h2}>{questionIndex + 1}/10</h2>
          <NewQuestion
            dataApi={dataApi[questionIndex]}
            setUserAnswer={setUserAnswer}
          />
          <Button className={classes.submitBtm} onClick={click}>
            Submit
          </Button>
        </div>
      </Card>
    );
  }
};
export default Quiz;
