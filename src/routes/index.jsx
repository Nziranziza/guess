import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Apply from '../pages/apply';

const Routes = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/apply" exact component={Apply} />
  </Switch>
);

export default Routes;
