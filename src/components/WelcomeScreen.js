import React from "react";
import "./WelcomeScreen.css";
import { Link } from "react-router-dom";

export const WelcomeScreen = () => {
  return (
    <div className="welcomeContainer">
      <div className="title">
        <p>Quiz App</p>
        <h1>ENJOY IT !!!</h1>
        <Link to="/quiz">
          <button className="startBtn">PRESS TO START</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
