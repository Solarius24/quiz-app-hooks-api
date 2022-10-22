import { Link, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="score" element={<ScoreCard />} />
      </Routes>
    </>
  );
};
export default App;
