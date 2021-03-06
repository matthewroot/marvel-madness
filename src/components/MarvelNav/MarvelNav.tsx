import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './MarvelNav.css';

export default class MarvelNav extends Component {
  render() {
    return (
      <div className="marvel-nav">
        <nav>
          <ul>
            <li>
              <NavLink to="/characters">Characters</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/series">Series</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
