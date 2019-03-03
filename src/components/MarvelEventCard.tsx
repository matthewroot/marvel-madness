import React, { Component } from 'react';
import { MarvelEventInterface } from '../interfaces/MarvelEventInterface';

export default class MarvelEventCard extends Component<
  MarvelEventCardProps,
  {}
> {
  render() {
    const imagePath = this.props.event.thumbnail.path.concat(
      '.',
      this.props.event.thumbnail.extension
    );

    const divStyle = {
      height: '66%',
      width: 'auto',
      backgroundImage: 'url(' + imagePath + ')',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    };

    return (
      <li key={this.props.event.id}>
        <div style={divStyle} />
        <h2>{this.props.event.title}</h2>
      </li>
    );
  }
}

interface MarvelEventCardProps {
  event: MarvelEventInterface;
}
