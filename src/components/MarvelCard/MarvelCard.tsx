import React, { Component } from 'react';

import './MarvelCard.css';

export default class MarvelCard extends Component<MarvelCardProps, {}> {
  render() {
    const imagePath = this.props.thumbnail.path
      .concat('.', this.props.thumbnail.extension)
      .replace(/$http/, 'https');

    const imageStyle = {
      height: '66%',
      width: 'auto',
      backgroundImage: 'url(' + imagePath + ')',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
    };

    return (
      <div className="marvel-card">
        <div style={imageStyle} />
        <h2>{this.props.header}</h2>
      </div>
    );
  }
}

interface MarvelCardProps {
  header: string;
  id: string;
  thumbnail: { path: string; extension: string };
}
