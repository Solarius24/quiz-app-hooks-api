import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./WelcomeScreen.module.css";
import Button from "components/UI/Button";
import { ErrorModal } from "components/UI/ErrorModal";
import { useAuthContext } from "../context/AuthContext";
import Select from "react-select";
import { Card, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { useLogout } from "hooks/useLogout";

//quiz categories
const quizCategories = [
  { value: "any", label: "Any Category" },
  { value: "9", label: "General Knowledge" },
  { value: "10", label: "Entertainment: Books" },
  { value: "11", label: "Entertainment: Film" },
  { value: "12", label: "Entertainment: Music" },
  { value: "13", label: "Entertainment: Musicals and Theatres" },
  { value: "14", lable: "Entertainment: Television" },
  { value: "15", lable: "Entertainment: Video Games" },
  { value: "16", label: "Entertainment: Board Games" },
  { value: "17", label: "Science and Nature" },
  { value: "18", label: "Science: Computers" },
  { value: "19", label: "Science: Mathematics" },
  { value: "20", label: "Mythology" },
  { value: "21", label: "Sports" },
  { value: "22", label: "Geography" },
  { value: "23", label: "History" },
  { value: "24", label: "Politics" },
  { value: "25", label: "Art" },
  { value: "26", label: "Celebrities" },
  { value: "27", label: "Animals" },
  { value: "28", label: "Vehicles" },
  { value: "29", label: "Entertainment: Comics" },
  { value: "30", label: "Science: Gadgets</option" },
  { value: "31", label: "Entertainment: Japanese Anime and Manga" },
  { value: "32", label: "Entertainment: Cartoon and Animations" },
];
//quiz difficulty level
const quizDifficultyLevel = [
  { value: "any", label: "Any Difficulty" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export const WelcomeScreen = ({
  setCategoryApp,
  setDifficultyApp,
  setNewUserNameApp,
}) => {
  const [error, setError] = useState();
  const [newUserName, setNewUserName] = useState();
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const navigate = useNavigate();

  //user displyName if false means that user is logout
  const currentUser = useAuthContext();
  const { logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  const errorHandlerScoreBtm = () => {
    if (!currentUser) {
      setError({
        title: "LOGIN ERROR",
        message: "PLEASE LOG IN OR SIGN UP TO VIEW THE SCORE CARD",
      });
      return;
    }
  };

  const errorHandlerStartBtm = (e) => {
    if (!currentUser && !newUserName) {
      setError({
        title: "USER NAME ERROR",
        message: "PLEASE ENTER PLAYER NAME OR LOG IN",
      });
    } else if (!category || !difficulty) {
      setError({
        title: "OPTIONS ERROR",
        message: "PLEASE SELECT THE CATEGORY AND DIFFICULTY LEVEL",
      });
      return;
    } else {
      setNewUserNameApp(newUserName);
      setDifficultyApp(difficulty);
      setCategoryApp(category);
      navigate("/quiz");
    }
  };

  return (
    <div className={classes.container}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}

      <Card className={classes.btm}>
        <Link to="/login">
          <Button onClick={logoutHandler}>
            {currentUser ? "LOG OUT" : "LOG IN/SIGN UP"}
          </Button>
        </Link>
        <Link to={currentUser ? "/scoreboard" : ""}>
          <Button onClick={errorHandlerScoreBtm}>SCORE LIST</Button>
        </Link>
      </Card>
      <Form className={classes.form_container}>
        <h1 className={classes.quizTitle}>Quiz App</h1>
        {!currentUser && (
          <FormGroup>
            <FormLabel>ENTER YOUR NAME (PLAY AS A GUEST)</FormLabel>
            <FormControl
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            ></FormControl>
          </FormGroup>
        )}
        {currentUser && (
          <h2 className={classes.isLogin}>
            Welcome: {currentUser.displayName}
          </h2>
        )}
        <h1 className={classes.quizEnjoy}>ENJOY IT !!!</h1>
        <FormGroup>
          <FormLabel>SELECT CATEGORY</FormLabel>
          <Select
            // defaultValue={quizCategories[0]}
            onChange={(option) => setCategory({option:option.value, label:option.label})}
            options={quizCategories}
            className={classes.dropdownOption}
            id="select"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel> SELECT DIFFICULTY LEVEL:</FormLabel>
          <Select
            // defaultValue={quizDifficultyLevel[0]}
            onChange={(option) => setDifficulty(option.value)}
            options={quizDifficultyLevel}
            className={classes.dropdownOption}
            id="difficultyLevel"
          />
        </FormGroup>
        <Button id={classes.startBtm} onClick={errorHandlerStartBtm}>
          PRESS TO START
        </Button>
      </Form>
    </div>
  );
};
