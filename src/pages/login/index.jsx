import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const onInputChange = (key, value) => {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  const isDisabled = () => {
    return !credentials.password || !credentials.username;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("credentials", JSON.stringify(credentials));
    history.push("apply");
  };

  return (
    <div className="form-container">
      <h1>Login to Guess Game</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => onInputChange("username", e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => onInputChange("password", e.target.value)}
          className="input"
        />
        <button disabled={isDisabled()} onClick={onSubmit} className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
