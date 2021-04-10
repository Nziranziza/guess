import { Switch, Redirect, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import LoginRoute from '../components/LoginRoute';
import Login from '../pages/login';
import Apply from '../pages/apply';
import PlayGround from '../pages/PlayGround';

const Routes = () => (
  <Switch>
    <Route  exact path="/">
      <Redirect to="/login" />
    </Route>
    <LoginRoute path="/login" exact component={Login} />
    <PrivateRoute path="/apply" exact component={Apply} />
    <PrivateRoute path="/play" exact component={PlayGround} />
  </Switch>
);

export default Routes;
