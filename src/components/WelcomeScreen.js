import { React, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "components/WelcomeScreen.module.css";
import Button from "components/UI/Button";
import Card from "components/UI/Card";
import { ErrorModal } from "components/UI/ErrorModal";
import { useData } from "context/DataContext";

export const WelcomeScreen = ({
  setCategory,
  setDifficulty,
  setNewUserName,
}) => {
  const [error, setError] = useState();
  const newUserName = useRef();
  const category = useRef();
  const difficultyLevel = useRef();
  const navigate = useNavigate();

  //check if the user is login or logout also fetch user login name from firebase
  const { isLogin, name } = useData();

  //function to pass entered player name to app componenet
  const userNameHandler = () => {
    setNewUserName(newUserName.current.value);
  };

  const selectHandler = () => {
    setCategory(category.current.value);
  };

  const difficultyHandler = () => {
    setDifficulty(difficultyLevel.current.value);
  };
  const errorHandlerScoreBtm = () => {
    if (!isLogin()) {
      setError({
        title: "LOGIN ERROR",
        message: "PLEASE LOG IN OR SIGN UP TO VIEW THE SCORE CARD",
      });
      return;
    }
  };
  const errorHandlerStartBtm = () => {
    if (!isLogin() && !newUserName.current.value) {
      setError({
        title: "USER NAME ERROR",
        message: "PLEASE ENTER PLAYER NAME OR LOG IN",
      });
    } else {
      return navigate("/quiz");
    }
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card>
        <div className={classes.title}>
          <div className={classes.dropdownContainer}>
            {!isLogin() && (
              <form className={classes.formInputUser}>
                <label>ENTER YOUR NAME ( PLAY AS A GUEST )</label>
                <input
                  ref={newUserName}
                  onChange={userNameHandler}
                  type="text"
                ></input>
              </form>
            )}
            {isLogin() && <h2>Welcome: {name}</h2>}
            <label className="dropdownCategory">SELECT CATEGORY: </label>
            <select
              ref={category}
              onChange={selectHandler}
              className={classes.dropdownOption}
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
              <option value="31">
                Entertainment: Japanese Anime and Manga
              </option>
              <option value="32">Entertainment: Cartoon and Animations</option>
            </select>
            <label className={classes.dropdownCategory}>
              SELECT DIFFICULTY LEVEL:{" "}
            </label>
            <select
              ref={difficultyLevel}
              onChange={difficultyHandler}
              className={classes.dropdownOption}
              id="difficultyLevel"
            >
              <option value="any">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <p>Quiz App</p>
          <h1>ENJOY IT !!!</h1>
          <Button id={classes.startBtm} onClick={errorHandlerStartBtm}>
            PRESS TO START
          </Button>
          <header>
            <Link to="/dashboard">
              <Button className={classes.scoreBtm}>
                {isLogin() ? "LOG OUT" : "LOG IN/SIGN UP"}
              </Button>
            </Link>
            <Link to={isLogin() ? "/scoreboard" : ""}>
              <Button
                className={classes.scoreBtm}
                onClick={errorHandlerScoreBtm}
              >
                SCORE LIST
              </Button>
            </Link>
          </header>
        </div>
      </Card>
    </>
  );
};
