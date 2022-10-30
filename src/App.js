import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";

const quizDataHistory = [
  {
    name: "Marek",
    difficulty: "Easy",
    category: "History",
    scoreValue: 0,
  },

  {
    name: "Janek",
    difficulty: "Easy",
    category: "History",
    scoreValue: 0,
  },
  {
    name: "Tomek",
    difficulty: "Easy",
    category: "History",
    scoreValue: 0,
  },
];

const App = () => {
  const [scoreValue, setScoreValue] = useState(0);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [name, setName] = useState("Player");
  const [appUserData, setAppUserData] = useState(
    JSON.parse(localStorage.getItem("quiz1"))
  );
   console.log(appUserData)

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
      </Routes>
    </>
  );
};
export default App;
