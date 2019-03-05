import React, { Component } from 'react';
import MarvelEventCard from './MarvelEventCard';
import * as MarvelEntityInterfaces from '../interfaces/MarvelEntityInterfaces';

import './MarvelEventsList.css';

export default class MarvelEventsList extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Marvel Events</h1>
        {/* TODO: add loading indicator */}
        <ul className="MarvelEventsList">
          {this.props.events.map((event: MarvelEntityInterfaces.Event) => {
            return <MarvelEventCard event={event} key={event.id} />;
          })}
        </ul>
      </div>
    );
  }
}
