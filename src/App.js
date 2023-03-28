import { Navigate, Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "pages/WelcomeScreen";
import { Quiz } from "pages/quiz/Quiz";
import { ScoreCard } from "pages/scoreCard/ScoreCard";
import { useState } from "react";
import { ScoreBoard } from "./pages/scoreBoard/ScoreBoard";
import { useAuthContext } from "./context/AuthContext";
import Login from "pages/login/Login";
import SignUp from "pages/signup/SignUp";

const App = () => {
  const [scoreValue, setScoreValue] = useState(0);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [newUserName, setNewUserName] = useState();
  const currentUser = useAuthContext();
  console.log("App", currentUser)

  return (
      <Routes>
        <Route
          path="/"
          element={
            <WelcomeScreen
              setCategoryApp={setCategory}
              setDifficultyApp={setDifficulty}
              setNewUserNameApp={setNewUserName}
            />
          }
        />
        <Route path="/quiz">
          <Route
            index
            element={
              (currentUser || newUserName) ? (
                <Quiz
                  setScoreValue={setScoreValue}
                  category={category}
                  difficulty={difficulty}
                  newUserName={newUserName}
                />
              ) : (
                <Navigate to="/login" />
              )
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
        <Route
          path="/login"
          element={(currentUser) ? <Navigate to="/"/> : <Login />  }
        />
        <Route path="/signup" element={currentUser ? <Navigate to="/"/> : <SignUp /> } />
        <Route path="/scoreboard" element={<ScoreBoard />} />
      </Routes>
  );
};

export default App;
