import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MarvelListRoutes from './routes/MarvelListRoutes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>
        <MarvelListRoutes />
      </div>
    );
  }
}

export default App;
