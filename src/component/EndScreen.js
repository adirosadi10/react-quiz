import React, { useContext } from "react";
import { Questions } from "../helpers/QuizBank";
import { QuizContext } from "../helpers/Context";
import "../App.css";

const EndScreen = () => {
  const { score, setScore, setGameState, userName, setUserName } = useContext(
    QuizContext
  );
  const restartQuiz = () => {
    setScore(0);
    setUserName("");
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Selesai</h1>
      <h2>{userName}</h2>
      <h3>Skor anda :</h3>
      <h3>
        {score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Ulangi</button>
    </div>
  );
};

export default EndScreen;
