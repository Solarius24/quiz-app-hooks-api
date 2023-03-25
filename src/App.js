import { Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "pages/WelcomeScreen";
import { Quiz } from "pages/quiz/Quiz";
import { ScoreCard } from "pages/scoreCard/ScoreCard";
import { useState } from "react";
import { ScoreBoard } from "./components/ScoreBoard";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "pages/login/Login";
import SignUp from "pages/signup/SignUp";

const App = () => {
  const [scoreValue, setScoreValue] = useState(0);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [newUserName, setNewUserName] = useState();

  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path="/"
          element={
            <WelcomeScreen
              setCategory={setCategory}
              setDifficulty={setDifficulty}
              setNewUserName={setNewUserName}
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
                newUserName={newUserName}
              />
            }
          />
          <Route
            path="score"
            element={
              <ScoreCard
                value={scoreValue}
                category={category}
                difficulty={difficulty}
                scoreValue={scoreValue}
              />
            }
          />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="scoreboard" element={<ScoreBoard />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
