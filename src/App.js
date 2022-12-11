import { Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Quiz } from "./components/Quiz";
import { ScoreCard } from "./components/ScoreCard";
import { useState } from "react";
import { ScoreBoard } from "./components/ScoreBoard";
import { Modal } from "../src/components/ModalAuth/components/Modal";
import { DataProvider } from "./context/DataContext";

const App = () => {
  const [scoreValue, setScoreValue] = useState(0);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [newUserName, setNewUserName] = useState();

  return (
    <DataProvider>
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
        <Route path="scoreboard" element={<ScoreBoard />} />
      </Routes>
      <Modal />
    </DataProvider>
  );
};

export default App;
