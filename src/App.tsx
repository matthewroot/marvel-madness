import React, { Component } from 'react';

import MarvelEventsList from './components/MarvelEventsList';

import './App.css';

class App extends Component {
  state = { events: [] };
  componentDidMount() {
    let apiKey = process.env.REACT_APP_API_KEY;

    fetch(`http://gateway.marvel.com/v1/public/events?apikey=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        let data = json.data;
        this.setState({ events: data.results });

        console.log(this.state.events[0]);
      });
  }

  render() {
    return (
      <div className="Marvel Madness">
        <MarvelEventsList events={this.state.events} />
      </div>
    );
  }
}

export default App;
