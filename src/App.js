import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import { useState } from "react";

const App = () => {
  const [scoreValue , setScoreValue] = useState()
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/quiz">
          <Route index element={<Quiz setScoreValue={setScoreValue}/>} />
          <Route path="score" element={<ScoreCard value= {scoreValue}/>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
