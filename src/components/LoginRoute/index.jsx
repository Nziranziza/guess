import React from 'react';
import {
  Redirect, 
  Route
} from 'react-router-dom';

const LoginRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem("credentials");
  const applicantId = localStorage.getItem("applicantId");

  if (applicantId && isLoggedIn) {
    return <Route render={() => <Redirect to="/play" />} />;
  }

  if (isLoggedIn) {
    return <Route render={() => <Redirect to="/apply" />} />;
  }

  return <Route render={() => <Component {...rest} />} />;;
};

export default LoginRoute;
