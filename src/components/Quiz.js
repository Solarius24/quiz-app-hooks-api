import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewQuestion } from "./NewQuestion";
import "./Quiz.css";
import { Loader } from "./Loader";
import { Link, useNavigate } from "react-router-dom";

const Quiz = ({ setScoreValue, category, difficulty,name }) => {
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
    const myTimeout = setTimeout(dataFetch, 2000);
  }, []);

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

  if (dataApi === null) {
    return <Loader />;
  } else if (dataApi !== null) {
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
        <div className="player_name">PLAYER NAME: {name}</div>
        <div className="quiz-container">
          <h2>{questionIndex + 1}/10</h2>
          <NewQuestion
            dataApi={dataApi[questionIndex]}
            setUserAnswer={setUserAnswer}
          />
          <button onClick={click}>Submit</button>
        </div>
      </>
    );
  }
};
export default Quiz;
