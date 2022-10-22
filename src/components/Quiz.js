import React, { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import axios from "axios";
import { NewQuestion } from "./NewQuestion";
import "./Quiz.css";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [dataApi, setDataApi] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

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
      }
    }
  };

  if (dataApi === null) {
    return <Loader />;
  } else if (dataApi !== null) {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li className="homeBtn">
              <Link to="/" className="homeBtn">Home</Link>
            </li>
          </ul>
        </nav>
        <ScoreCard questionIndex={questionIndex} value={value} />
        <div
          className="quiz-container"
          style={{ display: questionIndex >= 9 ? "none" : "block" }}
        >
          <h2>{questionIndex + 1}/10</h2>
          <NewQuestion
            dataApi={dataApi[questionIndex]}
            setUserAnswer={setUserAnswer}
          />
          <button onClick={click}>Submit</button>
        </div>
      </React.Fragment>
    );
  }
};
export default Quiz;
