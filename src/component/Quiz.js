import React, { useState, useContext } from "react";
import { Questions } from "../helpers/QuizBank";
import { QuizContext } from "../helpers/Context";
import "../App.css";

function Quiz() {
  const { score, setScore, gameState, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChoose, setOptionChoose] = useState("");
  const chooseOption = (option) => {
    setOptionChoose(option);
  };
  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChoose) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };
  const prevQuestion = () => {
    if (Questions[currQuestion - 1].answer === optionChoose) {
      setScore(score - 1);
    }
    setCurrQuestion(currQuestion - 1);
  };
  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChoose) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="Option">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      <div>
        {currQuestion === Questions.length - 1 ? (
          <button className="button" onClick={finishQuiz}>
            {" "}
            Selesai
          </button>
        ) : (
          <button className="button" onClick={nextQuestion}>
            Selanjutnya
          </button>
        )}
      </div>
      <div>
        {currQuestion >= 1 ? (
          <button onClick={prevQuestion}>kembali</button>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default Quiz;
