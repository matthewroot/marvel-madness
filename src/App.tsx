import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import MarvelList from './components/MarvelList';

import './App.css';

class App extends Component {
  render() {
    const entities: string[] = ['characters', 'events', 'series'];
    const listRoutes = entities.map(entity => {
      const entityPath = '/'.concat(entity);
      return (
        <Route path={entityPath} render={() => <MarvelList type={entity} />} />
      );
    });

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
        {listRoutes}
      </div>
    );
  }
}

export default App;
