import React, { Component } from 'react';
import MarvelCard from './MarvelCard';
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

    return (
      <MarvelCard
        id={this.props.event.id}
        header={this.props.event.title}
        imagePath={imagePath}
      />
    );
  }
}

interface MarvelEventCardProps {
  event: MarvelEntityInterfaces.Event;
}
