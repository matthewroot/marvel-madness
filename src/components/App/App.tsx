import React, { Component } from 'react';

import AppRoutes from '../../routes/AppRoutes';
import MarvelListRoutes from '../../routes/MarvelListRoutes';
import MarvelNav from '../MarvelNav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarvelNav />
        <AppRoutes />
        <MarvelListRoutes />
      </div>
    );
  }
}

export default App;
