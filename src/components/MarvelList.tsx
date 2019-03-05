import React, { Component } from 'react';
import MarvelCard from './MarvelCard';
import * as MarvelEntityInterfaces from '../interfaces/MarvelEntityInterfaces';

import './MarvelList.css';

export default class MarvelList extends Component<MarvelListProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const entityCapitalized =
      this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);
    const title = `Marvel ${entityCapitalized}s`;

    return (
      <div>
        <h1>{title}</h1>
        {/* TODO: add loading indicator */}
        <ul className="MarvelList">
          {this.props.data.map((data: MarvelEntityInterfaces.Base) => {
            return <MarvelCard data={data} key={data.id} />;
          })}
        </ul>
      </div>
    );
  }
}

interface MarvelListProps {
  type: string;
  data: any;
}
