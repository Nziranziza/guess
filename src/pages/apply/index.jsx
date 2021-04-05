import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import "./index.scss";
import fetchAPI from '../../services';

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
      console.log(res);
      localStorage.setItem('applicantId', res.applicantId);
      setStep(step + 1);
      setInstructions(res.instructions);
    }).catch((error) => {
      console.log(error);
    })
  };

  const onPlay = () => {
    history.push('/play')
  };

  return (
    <div className="login-container">
      <h1>{`${step === 1 ? "Apply to play" : "Instructions"}`}</h1>
      {step === 1 ? (
        <form className="login-form">
          <input
            placeholder="Preferred Name"
            value={details.preferredName}
            onChange={(e) => onInputChange("preferredName", e.target.value)}
            type="text"
          />
          <input
            placeholder="Email address"
            value={details.emailAddress}
            onChange={(e) => onInputChange("emailAddress", e.target.value)}
            type="email"
          />
          <button onClick={onApply}>Apply</button>
        </form>
      ) : (
        <div className="login-form">
          <p>{instructions}</p>
          <button
           onClick={onPlay}
          >
            Play
          </button>
        </div>
      )}
    </div>
  );
};

export default Apply;
