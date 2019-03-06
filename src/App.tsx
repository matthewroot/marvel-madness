import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MarvelListRoutes from './routes/MarvelListRoutes';
import MarvelNav from './components/MarvelNav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarvelNav />
        <MarvelListRoutes />
      </div>
    );
  }
}

export default App;
