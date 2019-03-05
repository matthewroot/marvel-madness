import React, { Component } from 'react';

export default class MarvelCard extends Component<MarvelCardProps, {}> {
  render() {
    const imageStyle = {
      height: '66%',
      width: 'auto',
      backgroundImage: 'url(' + this.props.imagePath + ')',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    };

    return (
      <li key={this.props.id}>
        {/* TODO: add mouse hover to show description instead of title */}
        <div style={imageStyle} />
        <h2>{this.props.header}</h2>
      </li>
    );
  }
}

interface MarvelCardProps {
  header: string;
  id: string;
  imagePath: string;
}
