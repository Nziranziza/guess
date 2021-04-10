import React, { useState } from "react";
import parse from 'html-react-parser';

import './index.scss';
import fetchAPI from '../../services';

const PlayGround = () => {
  const [guess, setGuess] = useState("");
  const [previousGuess, setPreviousGuess] = useState("");
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const [instructions, setInstructions] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const applicantId = localStorage.getItem("applicantId");
    const gameId = localStorage.getItem("gameId");
    setSending(true);
    fetchAPI("/game", {
      method: "PUT",
      body: {
        applicantId,
        gameId,
        guess: Number(guess),
      },
    })
      .then(({ result, instructions }) => {
        setResult(result);
        setPreviousGuess(guess);
        setGuess("");
        if(result === 'correct') {
          setInstructions(instructions)
        }
      })
      .finally(() => {
        setSending(false);
      });
  };
  return (
    <div className="login-container">
      {result !== "correct" && (
        <>
          <h1>Enter your guess</h1>
          <form className="login-form">
            <input
              placeholder="Guess"
              onChange={(e) => setGuess(e.target.value)}
              value={guess}
            />
            <button onClick={onSubmit} disabled={!guess || sending}>
              {sending ? "Processing..." : "Send"}
            </button>
          </form>
        </>
      )}
      {previousGuess && result !== "correct" && (
        <div className="error">
          <span>Your guess: {previousGuess}</span>
          <span>Go {result}</span>
        </div>
      )}
      {result === "correct" && (
        <div className="success">
          <span>Your guess: {previousGuess}</span>
          <span>That is correct!!!</span>
          <p>{parse(instructions.replaceAll("\n", "<br />"))}</p>
        </div>
      )}
    </div>
  );
};

export default PlayGround;
