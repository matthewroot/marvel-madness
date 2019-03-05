import React, { Component } from 'react';
import * as MarvelEntityInterfaces from '../interfaces/MarvelEntityInterfaces';

export default class MarvelEventCard extends Component<
  MarvelEventCardProps,
  {}
> {
  render() {
    const imagePath = this.props.event.thumbnail.path.concat(
      '.',
      this.props.event.thumbnail.extension
    );

    const eventImageStyle = {
      height: '66%',
      width: 'auto',
      backgroundImage: 'url(' + imagePath + ')',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    };

    return (
      <li key={this.props.event.id}>
        {/* TODO: add mouse hover to show event.description. Have title slide
          to the top of the card and replace image with description. */}
        <div style={eventImageStyle} />
        <h2>{this.props.event.title}</h2>
      </li>
    );
  }
}

interface MarvelEventCardProps {
  event: MarvelEntityInterfaces.Event;
}
