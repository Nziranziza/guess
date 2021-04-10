import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

import "./index.scss";
import { fetchAPI, logout } from '../../services';

const Apply = () => {
  const [details, setDetails] = useState({
    preferredName: "",
    emailAddress: "",
  });
  const [step, setStep] = useState(1);
  const [instructions, setInstructions] = useState('');
  const history = useHistory();

  const onInputChange = (key, value) => {
    setDetails({
      ...details,
      [key]: value,
    });
  };

  const onApply = (e) => {
    e.preventDefault();
    fetchAPI('/apply', {
      body: details,
      method: 'POST'
    }).then((res) => {
      localStorage.setItem('applicantId', res.applicantId);
      setStep(step + 1);
      setInstructions(res.instructions);
      fetchAPI('/game', {
        method: 'POST',
        body: {
          applicantId: res.applicantId
        }
      }).then((res) => {
        localStorage.setItem('gameId', res.gameId)
      })
    }).catch((error) => {
      console.log(error);
    })
  };

  const onPlay = () => {
    history.push('/play')
  };

  const isDisabled = () => {
    return !details.emailAddress || !details.preferredName
  }

  const logoutHandler = () => {
    logout();
    history.push('/login');
  }

  return (
    <>
    <div className="form-container">
      <h1>{`${step === 1 ? "Apply to play" : "Instructions"}`}</h1>
      {step === 1 ? (
        <form>
          <input
            placeholder="Preferred Name"
            value={details.preferredName}
            onChange={(e) => onInputChange("preferredName", e.target.value)}
            type="text"
            className="input"
          />
          <input
            placeholder="Email address"
            value={details.emailAddress}
            onChange={(e) => onInputChange("emailAddress", e.target.value)}
            type="email"
            className="input"
          />
          <button 
          onClick={onApply}
          className="button"
          disabled={isDisabled()}
          >
            Apply
          </button>
        </form>
      ) : (
        <div className="form-container">
          <p>{parse(instructions.replaceAll('\n', '<br />'))}</p>
          <button
           onClick={onPlay}
           className="button"
          >
            Play
          </button>
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

export default Apply;
