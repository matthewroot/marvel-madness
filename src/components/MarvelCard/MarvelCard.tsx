import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MarvelCard extends Component<MarvelCardProps, {}> {
  render() {
    const imagePath = this.props.thumbnail.path.concat(
      '.',
      this.props.thumbnail.extension
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
      <Link to={`characters/${this.props.id}`}>
        <li key={this.props.id}>
          {/* TODO: add mouse hover to show description instead of title */}
          <div style={imageStyle} />
          <h2>{this.props.header}</h2>
        </li>
      </Link>
    );
  }
}

interface MarvelCardProps {
  header: string;
  id: string;
  thumbnail: { path: string; extension: string };
}