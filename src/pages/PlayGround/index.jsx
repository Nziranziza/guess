import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import { useHistory } from 'react-router-dom';

import './index.scss';
import { fetchAPI, logout } from '../../services';

const PlayGround = () => {
  const [guess, setGuess] = useState("");
  const [previousGuess, setPreviousGuess] = useState("");
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const [instructions, setInstructions] = useState('');
  const history = useHistory();
  
  useEffect(() => {
    const gameId = localStorage.getItem("gameId");
    const applicantId = localStorage.getItem("applicantId");
    if(!gameId) {
      fetchAPI('/game', {
        method: 'POST',
        body: {
          applicantId: applicantId
        }
      }).then((res) => {
        localStorage.setItem('gameId', res.gameId)
      })
    }
  }, []);

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

  const logoutHandler = () => {
    logout();
    history.push('/login');
  }
  return (
    <>
    <div className="form-container">
      {result !== "correct" && (
        <>
          <h1>Enter your guess</h1>
          <form>
            <input
              placeholder="Guess"
              onChange={(e) => setGuess(e.target.value)}
              value={guess}
              className="input"
            />
            <button className="button" onClick={onSubmit} disabled={!guess || sending}>
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
    <button 
      className="logout-btn button"
      onClick={logoutHandler}
      >
        Logout
      </button>
    </>
  );
};

export default PlayGround;
