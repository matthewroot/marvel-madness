import React, { Component } from 'react';
import MarvelCard from '../MarvelCard';
import * as MarvelEntityInterfaces from '../../interfaces/MarvelEntityInterfaces';

export default class MarvelSeriesCard extends Component<
  MarvelSeriesCardProps,
  {}
> {
  render() {
    const imagePath = this.props.series.thumbnail.path.concat(
      '.',
      this.props.series.thumbnail.extension
    );

    return (
      <MarvelCard
        id={this.props.series.id}
        header={this.props.series.title}
        imagePath={imagePath}
      />
    );
  }
}

interface MarvelSeriesCardProps {
  series: MarvelEntityInterfaces.Series;
}
