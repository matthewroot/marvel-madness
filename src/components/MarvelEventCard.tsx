import React, { Component } from 'react';
import { MarvelEventInterface } from '../interfaces/MarvelEventInterface';

export default class MarvelEventCard extends Component<
  MarvelEventCardProps,
  {}
> {
  render() {
    return <li key={this.props.event.id}>{this.props.event.title}</li>;
  }
}

interface MarvelEventCardProps {
  event: MarvelEventInterface;
}
