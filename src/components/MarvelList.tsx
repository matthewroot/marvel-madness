import React, { Component } from 'react';
import MarvelAPI from '../utils/MarvelAPI';
import MarvelCard from './MarvelCard';
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
    const entityCapitalized =
      this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);
    const title = `Marvel ${entityCapitalized}`;

    return (
      <div>
        <h1>{title}</h1>
        {/* TODO: add loading indicator */}
        <ul className="MarvelList">
          {this.state.data.map((data: MarvelEntityInterfaces.Event) => {
            return <MarvelCard data={data} key={data.id} />;
          })}
        </ul>
      </div>
    );
  }
}

function componentFromType(type: string) {
  const cardMapping = {
    event: 'MarvelEventCard',
    character: 'MarvelCharacterCard',
  };
}

interface MarvelListProps {
  type: string;
}
