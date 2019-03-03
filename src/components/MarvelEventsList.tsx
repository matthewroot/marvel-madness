import React, { Component } from 'react';

export default class MarvelEventsList extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Marvel Events</h1>
        <ul>
          {this.props.events.map((event: MarvelEvent) => {
            return <li key={event.id}>{event.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

interface MarvelEvent {
  id: string;
  title: string;
}