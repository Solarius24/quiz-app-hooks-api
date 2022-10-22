import React from "react";

const ScoreCard = ({ value, questionIndex }) => {
  return (
    <div className="scoreCard" style={{display:(questionIndex < 9) ? 'none' : 'block'}}>
      <h1>YOUR SCORE</h1>
      <h1>{value} %</h1>
      <button
        onClick={() => {
          window.location.reload(false);
        }}
      >
        START NEW QUIZ
      </button>
    </div>
  );
};

export default ScoreCard;
