import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './home.jsx';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <div class="body">
        <Route exact path="/" component={Home} />
      </div>
    </div>
  </Router>
);

render(<App/>, document.getElementById('root'));
