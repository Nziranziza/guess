import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Apply from '../pages/apply';
import PlayGround from '../pages/PlayGround';

const Routes = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/apply" exact component={Apply} />
    <Route path="/play" exact component={PlayGround} />
  </Switch>
);

export default Routes;
