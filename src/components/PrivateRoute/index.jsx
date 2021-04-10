import React from 'react';
import {
  Redirect, 
  Route
} from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = localStorage.getItem('credentials');
  return <Route 
  render={() => (
    isLoggedIn ? <Component { ...rest }/> : <Redirect to="/login" />
  )}
  />
};

export default PrivateRoute;
