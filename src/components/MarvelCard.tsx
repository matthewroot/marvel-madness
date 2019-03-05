import React, { Component } from 'react';
import * as MarvelEntityInterfaces from '../interfaces/MarvelEntityInterfaces';

export default class MarvelCard extends Component<MarvelCardProps, {}> {
  render() {
    const imagePath = this.props.data.thumbnail.path.concat(
      '.',
      this.props.data.thumbnail.extension
    );

    const imageStyle = {
      height: '66%',
      width: 'auto',
      backgroundImage: 'url(' + imagePath + ')',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    };

    return (
      <li key={this.props.data.id}>
        {/* TODO: add mouse hover to show description instead of title */}
        <div style={imageStyle} />
        <h2>{this.props.data.title}</h2>
      </li>
    );
  }
}

interface MarvelCardProps {
  data: MarvelEntityInterfaces.Event;
}
