import React, { Component } from 'react';

import AppRoutes from '../../routes/AppRoutes';
import MarvelNav from '../MarvelNav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarvelNav />
        <AppRoutes />
      </div>
    );
  }
}

export default App;
