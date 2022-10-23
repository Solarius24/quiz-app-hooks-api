import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import { useState } from "react";

const App = () => {
  const [scoreValue, setScoreValue] = useState();
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState('any')
  const [name, setName] = useState('')

  console.log(difficulty,category)


  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeScreen setCategory={setCategory} setDifficulty={setDifficulty} setName={setName}/>} />
        <Route path="/quiz">
          <Route
            index
            element={<Quiz setScoreValue={setScoreValue} category={category} difficulty={difficulty} name={name}/>}
          />
          <Route path="score" element={<ScoreCard value={scoreValue} />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
