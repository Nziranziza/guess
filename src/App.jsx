import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Routes from './routes/index';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
