import React, { Component } from 'react';

import MarvelAPI from './utils/MarvelAPI';
import MarvelEventsList from './components/MarvelEventsList';

import './App.css';

class App extends Component {
  state = { events: [] };

  async componentDidMount() {
    const events = await MarvelAPI.get({ entity: 'events' });
    this.setState({ events: events });
  }

  render() {
    return (
      <div className="App">
        <MarvelEventsList events={this.state.events} />
      </div>
    );
  }
}

export default App;
