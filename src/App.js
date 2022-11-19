import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "../src/components/ModalAuth/components/Modal"



const App = () => {
  const [scoreValue, setScoreValue] = useState(0);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [name, setName] = useState(null);
  const [appUserData, setAppUserData] = useState([]);
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <WelcomeScreen
              isLogin = {isLogin}
              setCategory={setCategory}
              setDifficulty={setDifficulty}
              setName={setName}
              name={name}
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
                setName={setName}
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
      <Modal setIsLogin={setIsLogin} setName={setName}/>
    </>
  );
};
export default App;
