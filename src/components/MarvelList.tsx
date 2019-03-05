import React, { Component } from 'react';
import MarvelAPI from '../utils/MarvelAPI';
import MarvelEventCard from './MarvelEventCard';
import MarvelCharacterCard from './MarvelCharacterCard';
import * as MarvelEntityInterfaces from '../interfaces/MarvelEntityInterfaces';

import './MarvelList.css';

const cardComponents: any = {
  characters: MarvelCharacterCard,
  events: MarvelEventCard,
  // series: MarvelSeriesCard,
};

interface MarvelListProps {
  type: string;
}

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
    const Card = cardComponents[this.props.type];

    return (
      <div>
        <h1>{title}</h1>
        {/* TODO: add loading indicator */}
        <ul className="MarvelList">
          {this.state.data.map(
            (
              data:
                | MarvelEntityInterfaces.Character
                | MarvelEntityInterfaces.Event
                | MarvelEntityInterfaces.Series
            ) => {
              let cardProps: any = {};
              cardProps[
                this.props.type.slice(0, this.props.type.length - 1)
              ] = data;
              cardProps.key = data.id;
              return <Card {...cardProps} />;
            }
          )}
        </ul>
      </div>
    );
  }
}
