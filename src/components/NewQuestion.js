import React from "react";

export const NewQuestion = ({ dataApi, display, setUserAnswer }) => {
  console.log(dataApi);
  const { incorrect_answers } = dataApi;
  const { correct_answer } = dataApi;
  const { question } = dataApi;

  if (incorrect_answers.length < 4) {
    const answers = incorrect_answers.push(correct_answer);
  }

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      const value = e.target.value;
      setUserAnswer(value);
    }
    return setUserAnswer;
  };
  const renderAnswers = incorrect_answers.map((answer) => {
    return (
      <li key={answer}>
        <input
          type="radio"
          value={answer}
          name="but"
          className="answer"
          onChange={onChangeHandler}
        />
        <label>  {answer}</label>
      </li>
    );
  });

  return (
    <div className="quiz-header" style={display}>
      <h1>{question}</h1>
      <ul>{renderAnswers}</ul>
    </div>
  );
};
