import React, { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import axios from "axios";
import { NewQuestion } from "./NewQuestion";
import "./Quiz.css";
import { Loader } from "./Loader";
import { Link, useNavigate } from "react-router-dom";
import App from "../App"

const Quiz = ({setScoreValue}) => {
  const [dataApi, setDataApi] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await axios.get(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
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
        setScoreValue(value)
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
        {/* <ScoreCard questionIndex={questionIndex} value={value} /> */}
        <div
          className="quiz-container"
          // style={{ display: questionIndex >= 9 ? "none" : "block" }}
        >
          <h2>{questionIndex + 1}/10</h2>
          <NewQuestion
            dataApi={dataApi[questionIndex]}
            setUserAnswer={setUserAnswer}
          />
          <button  onClick={click}>Submit</button>
        </div>
      </>
    );
  }
};
export default Quiz;
