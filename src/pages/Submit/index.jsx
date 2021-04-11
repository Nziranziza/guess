import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import parse from 'html-react-parser';

import { fetchAPI, logout } from "../../services";
import Toast from "../../components/Toast";

const Submit = () => {
  const [gameId, setGameId] = useState(localStorage.getItem("gameId"));
  const [applicantId, setApplicantId] = useState(
    localStorage.getItem("applicantId")
  );
  const [packUrl, setPackUrl] = useState("");
  const [packInstructions, setPackInstructions] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [finalMessage, setFinalMessage] = useState("");
  const history = useHistory();

  const isDisabled = () => {
    return (
      !gameId || !applicantId || !packUrl || !packInstructions || submitting
    );
  };

  const onSubmit = () => {
    setSubmitting(true);
    fetchAPI("/submit-application", {
      method: "POST",
      body: {
        applicantId,
        gameId,
        packUrl,
        packInstructions,
      },
    })
      .then((res) => {
        setFinalMessage(res.instructions);
      })
      .catch((error) => {
        setError(error.message);
        setShowToast(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const logoutHandler = () => {
    logout();
    history.push("/login");
  };

  return (
    <>
      <div className="form-container">
        {!finalMessage && (
          <>
            <h1>Submit your pack</h1>
            <form>
              <input
                className="input"
                placeholder="Applicant Id"
                value={applicantId}
                onChange={(e) => setApplicantId(e.target.value)}
              />
              <input
                className="input"
                placeholder="Game Id"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
              />
              <input
                className="input"
                placeholder="Pack url"
                value={packUrl}
                onChange={(e) => setPackUrl(e.target.value)}
              />
              <textarea
                className="input"
                placeholder="Pack Instructions"
                value={packInstructions}
                onChange={(e) => setPackInstructions(e.target.value)}
              />
              <button
                className="button"
                disabled={isDisabled()}
                onClick={onSubmit}
                type="submit"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        )}
        {finalMessage && (
          <>
            <div className="success">
              <p>{parse(finalMessage.replaceAll('\n', '<br />'))}</p>
            </div>
            <button onClick={logoutHandler} className="button submit-btn">
              Exit
          </button>
          </>
        )}
        <Toast
          type="error"
          message={error}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
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

export default Submit;
