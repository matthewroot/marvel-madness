import React, { Component } from 'react';
import { MarvelEventInterface } from '../interfaces/MarvelEventInterface';

export default class MarvelEventCard extends Component<
  MarvelEventCardProps,
  {}
> {
  render() {
    return (
      <li key={this.props.event.id}>
        <h2>{this.props.event.title}</h2>
        <p>{this.props.event.description}</p>
      </li>
    );
  }
}

interface MarvelEventCardProps {
  event: MarvelEventInterface;
}
