import React, { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import axios from "axios";
import { NewQuestion } from "./NewQuestion";
import "./App.css";

const App = () => {
  const [dataApi, setDataApi] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [display, setDisplay] = useState({ display: "none" });
  const [displayQ, setDisplayQ] = useState({ display: "" });
  const [value, setValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    const dataFetch = async () => {
      const data = await axios.get(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      const dataApiNew = data.data.results;
      setDataApi(dataApiNew);
      console.log("function1");
    };
    const myTimeout = setTimeout(dataFetch, 2000);
    // dataFetch();
  }, []);

  const counterHandler = () => {
    if (questionIndex < 9) {
      setQuestionIndex(questionIndex + 1);
    } else if (questionIndex >= 9) {
      setDisplayQ({ display: "none" });
      setDisplay({ display: "flex" });
    }
  };

  const finalScore = () => {
    if (userAnswer === dataApi[questionIndex].correct_answer) {
      setValue(value + 10);
    }
  };

  const click = () => {
    counterHandler();
    finalScore();
  };

  if (dataApi === null) {
    return (
      <div class="ui segment">
        <div class="ui active dimmer">
          <div
            class="ui massive text loader"
            style={{ color: "red", fontSize: "50px" }}
          >
            Loading
          </div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  } else if (dataApi !== null) {
    return (
      <React.Fragment>
        <ScoreCard display={display} value={value} />
        <div className="quiz-container">
          <h2>{questionIndex + 1}/10</h2>
          <NewQuestion
            dataApi={dataApi[questionIndex]}
            display={displayQ}
            setUserAnswer={setUserAnswer}
          />
          <button onClick={click} style={displayQ}>
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
};
export default App;
