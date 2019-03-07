import React, { Component } from 'react';
import MarvelAPI from '../../utils/MarvelAPI';
import MarvelCharacterCard from '../MarvelCharacterCard';
import MarvelEventCard from '../MarvelEventCard';
import MarvelSeriesCard from '../MarvelSeriesCard';
import * as MarvelEntityInterfaces from '../../interfaces/MarvelEntityInterfaces';

import './MarvelList.css';

const cardComponents: any = {
  characters: MarvelCharacterCard,
  events: MarvelEventCard,
  series: MarvelSeriesCard,
};

export default class MarvelList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { data: [], type: this.props.match.path.slice(1) };
  }

  async componentDidMount() {
    const data = await MarvelAPI.get({ entity: this.state.type });
    this.setState({ data: data });
  }

  render() {
    const type = this.state.type;
    const typeCapitalized: string =
      type.charAt(0).toUpperCase() + type.slice(1);
    const title: string = `Marvel ${typeCapitalized}`;
    const Card = cardComponents[type];

    return (
      <div className="marvel-list">
        <h1>{title}</h1>
        {/* TODO: add loading indicator */}
        <ul>
          {this.state.data.map(
            (
              data:
                | MarvelEntityInterfaces.Character
                | MarvelEntityInterfaces.Event
                | MarvelEntityInterfaces.Series
            ) => {
              let cardProps: any = {};

              type === 'series'
                ? (cardProps[type] = data)
                : (cardProps[type.slice(0, type.length - 1)] = data);
              cardProps.key = data.id;
              return <Card {...cardProps} />;
            }
          )}
        </ul>
      </div>
    );
  }
}
