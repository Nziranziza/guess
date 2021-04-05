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
    <div className="login-container">
      <h1>Login to Guess Game</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => onInputChange("username", e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => onInputChange("password", e.target.value)}
        />
        <button disabled={isDisabled()} onClick={onSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
