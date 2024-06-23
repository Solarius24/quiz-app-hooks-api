import React, { useState, useEffect } from "react";
import classes from "../pages/quiz/Quiz.module.css";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export const NewQuestion = ({
  dataApi,
  display,
  setUserAnswer,
  setAnswerChecked,
}) => {
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
      setAnswerChecked(true);
      return setUserAnswer;
    }
  };
  const renderAnswers = allAnswers.map((answer) => {
    return (
      <li key={answer} className={classes.answer_li}>
        <input
          type="radio"
          value={answer}
          name="but"
          onChange={onChangeHandler}
          className={classes.answer_input}
        />
        <label className={classes.answer_label}> {answer}</label>
      </li>
    );
  });

  return (
    <>
      {/* <div style={display}>
      <h1 className={classes.question_h1}>{question}</h1>
      <ul className={classes.question}>{renderAnswers}</ul>
    </div> */}
      <Card style={{width:"50rem"}}>
        <CardHeader>
        <CardTitle>{question}</CardTitle>
        </CardHeader>
        <CardBody className={classes.question}>{renderAnswers}</CardBody>
      </Card>
    </>
  );
};
