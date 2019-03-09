import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

import MarvelAPI from '../../utils/MarvelAPI';
import MarvelCard from '../MarvelCard';
import {
  Character,
  Event,
  Series,
} from '../../interfaces/MarvelEntityInterfaces';

import './MarvelList.css';

export default class MarvelList extends Component<any, any> {
  loading: boolean;
  mounted: boolean;

  constructor(props: any) {
    super(props);
    this.loading = true;
    this.mounted = false;
    this.state = { data: [] };
  }

  type = this.props.match.path.slice(1);

  async componentDidMount() {
    this.mounted = true;
    const data = await MarvelAPI.get({ entity: this.type });

    if (data) {
      this.loading = false;
    }

    if (this.mounted) {
      this.setState({ data: data });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const marvelList = (
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
    );

    const loader = (
      <div className="loading-container">
        <div className="loading-item">
          <RingLoader loading={this.loading} size={120} />
          <p>Querying Cerebro</p>
        </div>
      </div>
    );

    return (
      <div className="marvel-list">{this.loading ? loader : marvelList}</div>
    );
  }
}
