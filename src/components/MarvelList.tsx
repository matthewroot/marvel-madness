import React, { Component } from 'react';
import MarvelAPI from '../utils/MarvelAPI';
import MarvelEventCard from './MarvelEventCard';
import * as MarvelEntityInterfaces from '../interfaces/MarvelEntityInterfaces';

import './MarvelList.css';

export default class MarvelList extends Component<MarvelListProps, any> {
  constructor(props: any) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await MarvelAPI.get({ entity: this.props.type });
    this.setState({ data: data });
  }

  render() {
    const typeCapitalized: string =
      this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);
    const title: string = `Marvel ${typeCapitalized}`;

    return (
      <div>
        <h1>{title}</h1>
        {/* TODO: add loading indicator */}
        <ul className="MarvelList">
          {/* TODO NEXT: change this to render specific cards based on props.type */}
          {this.state.data.map((data: any) => {
            return <MarvelEventCard event={data} key={data.id} />;
          })}
        </ul>
      </div>
    );
  }
}

// function componentFromType(type: string) {
//   const cardMapping: any = {
//     characters: 'MarvelCharacterCard',
//     events: 'MarvelEventCard',
//   };

//   return cardMapping[type];
// }

// function interfaceFromType(type: string) {
//   const interfaceMapping: any = {
//     characters: MarvelEntityInterfaces.Character,
//     events: MarvelEntityInterfaces.Event,
//   };

//   return interfaceMapping[type];
// }

interface MarvelListProps {
  type: string;
}
