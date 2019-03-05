import React, { Component } from 'react';

import MarvelAPI from './utils/MarvelAPI';
import MarvelList from './components/MarvelList';

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
        <MarvelList type="event" data={this.state.events} />
      </div>
    );
  }
}

export default App;
