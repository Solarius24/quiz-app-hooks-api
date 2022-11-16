import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import LogIn from "./components/LogIn/LogIn";
import RegistrationForm from "./components/LogIn/RegistrationForm";// 

const quizDataHistory = [
  {
    name: "Marek",
    difficulty: "Easy",
    category: "22",
    scoreValue: 0,
  },
];

const App = () => {
  const [scoreValue, setScoreValue] = useState(0);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [name, setName] = useState("Player");
  const [appUserData, setAppUserData] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <WelcomeScreen
              setCategory={setCategory}
              setDifficulty={setDifficulty}
              setName={setName}
            />
          }
        />
        <Route path="/quiz">
          <Route
            index
            element={
              <Quiz
                setScoreValue={setScoreValue}
                category={category}
                difficulty={difficulty}
                name={name}
              />
            }
          />
          <Route
            path="score"
            element={
              <ScoreCard
                setAppUserData={setAppUserData}
                value={scoreValue}
                name={name}
                category={category}
                difficulty={difficulty}
                scoreValue={scoreValue}
              />
            }
          />
        </Route>
        <Route
          path="/scorelist"
          element={<ScoreBoard quizData={appUserData} />}
        />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/registration" element={<RegistrationForm/>}/>


      </Routes>
    </>
  );
};
export default App;
