import React, { Component } from 'react';
import MarvelCard from './MarvelCard';
import * as MarvelEntityInterfaces from '../interfaces/MarvelEntityInterfaces';

export default class MarvelCharacterCard extends Component<
  MarvelCharacterCardProps,
  {}
> {
  render() {
    const imagePath = this.props.character.thumbnail.path.concat(
      '.',
      this.props.character.thumbnail.extension
    );

    return (
      <MarvelCard
        id={this.props.character.id}
        header={this.props.character.name}
        imagePath={imagePath}
      />
    );
  }
}

interface MarvelCharacterCardProps {
  character: MarvelEntityInterfaces.Character;
}
