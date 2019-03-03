import React, { Component } from 'react';
import MarvelEventCard from './MarvelEventCard';
import { MarvelEventInterface } from '../interfaces/MarvelEventInterface';

export default class MarvelEventsList extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Marvel Events</h1>
        <ul>
          {this.props.events.map((event: MarvelEventInterface) => {
            return <MarvelEventCard event={event} />;
          })}
        </ul>
      </div>
    );
  }
}
