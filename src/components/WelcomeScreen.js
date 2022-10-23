import { React, useState } from "react";
import "./WelcomeScreen.css";
import { Link } from "react-router-dom";

export const WelcomeScreen = ({ setCategory, setDifficulty, setName }) => {
  const [userName, setUserName] = useState('')

  const userNameHandler = (e) => {
    const name = e.target.value
    setUserName(name)
    setName(name)
  }

  const selectHandler = () => {
    const select = document.getElementById("select");
    return setCategory(select.value);
  };

  const difficultyHandler = () => {
    const difficultyLevel = document.getElementById("difficultyLevel")
    return setDifficulty(difficultyLevel.value)
  }
  return (
    <div className="welcomeContainer">
      <div className="title">
        <div className="dropdown-container">
        <form className="form-input_user">
          <label>ENTER PLAYER NAME</label>
          <input onChange = {userNameHandler} type='text' value={userName}></input>
        </form>
          <label className="dropdown-category">SELECT CATEGORY: </label>
          <select
            onChange={selectHandler}
            className="dropdown-option"
            id="select"
          >
            <option value="any">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science and Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime and Manga</option>
            <option value="32">Entertainment: Cartoon and Animations</option>
          </select>
          <label className="dropdown-category">SELECT DIFFICULTY LEVEL: </label>
          <select onChange={difficultyHandler} className="dropdown-option" id="difficultyLevel">
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

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
