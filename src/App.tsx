import React, { Component } from 'react';

import MarvelList from './components/MarvelList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarvelList type="events" />
      </div>
    );
  }
}

export default App;
