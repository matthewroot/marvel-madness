import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MarvelAPI from '../../utils/MarvelAPI';
import MarvelCard from '../MarvelCard';
import {
  Character,
  Event,
  Series,
} from '../../interfaces/MarvelEntityInterfaces';

import './MarvelList.css';

export default class MarvelList extends Component<any, any> {
  mounted: boolean;

  constructor(props: any) {
    super(props);
    this.mounted = false;
    this.state = { data: [] };
  }

  type = this.props.match.path.slice(1);

  async componentDidMount() {
    this.mounted = true;
    const data = await MarvelAPI.get({ entity: this.type });

    if (this.mounted) {
      this.setState({ data: data });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="marvel-list">
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
              <li key={data.id}>
                <Link to={`/${this.type}/${data.id}`} key={data.id}>
                  <MarvelCard
                    id={data.id}
                    header={header}
                    thumbnail={data.thumbnail}
                    key={data.id}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
