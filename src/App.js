import { useState } from "react";
import "./App.css";
import EndScreen from "./component/EndScreen";
import MainMenu from "./component/MainMenu";
import Quiz from "./component/Quiz";
import { QuizContext } from "./helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>This Quiz</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          userName,
          setUserName,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
