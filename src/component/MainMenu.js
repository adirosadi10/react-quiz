import React, { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import "../App.css";
export default function MainMenu() {
  const { setGameState, setUserName } = useContext(QuizContext);
  return (
    <div className="Menu">
      <label>Nama lengkap:</label>
      <input
        type="text"
        placeholder="Ex. Selo"
        required
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Mulai
      </button>
    </div>
  );
}
