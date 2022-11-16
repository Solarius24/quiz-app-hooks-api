import React, { useState, useEffect } from "react";
import classes from './Quiz.module.css'

export const NewQuestion = ({ dataApi, display, setUserAnswer }) => {
  const { incorrect_answers } = dataApi;
  const { correct_answer } = dataApi;
  const { question } = dataApi;
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    if (incorrect_answers.length < 4) {
      const answers = incorrect_answers.push(correct_answer);
      const newAnswers = [...incorrect_answers].sort();
      setAllAnswers(newAnswers);
    }
  }, [correct_answer, incorrect_answers]);

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      const value = e.target.value;
      setUserAnswer(value);
    }
    return setUserAnswer;
  };
  const renderAnswers = allAnswers.map((answer) => {
    return (
      <li key={answer} className={classes.answer}>
        <input
          type="radio"
          value={answer}
          name="but"
          onChange={onChangeHandler}
        />
        <label> {answer}</label>
      </li>
    );
  });


  return (
    <div style={display}>
      <h1>{question}</h1>
      <ul className={classes.question}>{renderAnswers}</ul>
    </div>
  );
};

