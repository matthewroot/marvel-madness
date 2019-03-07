import React, { Component } from 'react';
import MarvelAPI from '../../utils/MarvelAPI';
import MarvelCard from '../MarvelCard';
import {
  Character,
  Event,
  Series,
} from '../../interfaces/MarvelEntityInterfaces';

import './MarvelList.css';

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

    return (
      <div className="marvel-list">
        <h1>{title}</h1>
        {/* TODO: add loading indicator */}
        <ul>
          {this.state.data.map((data: Character | Event | Series) => {
            let header;

            if ((data as Character).name) {
              header = (data as Character).name;
            } else {
              header = (data as Event | Series).title;
            }

            return (
              <MarvelCard
                id={data.id}
                header={header}
                thumbnail={data.thumbnail}
                key={data.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
