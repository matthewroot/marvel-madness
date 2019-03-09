import React, { Component } from 'react';

import MarvelAPI from '../../utils/MarvelAPI';
import MarvelCard from '../MarvelCard';

import './MarvelEntityDetails.css';

export default class MarvelEntityDetails extends Component<any, any> {
  loading: boolean;

  constructor(props: any) {
    super(props);
    this.loading = true;
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await MarvelAPI.get({
      entity: this.props.match.params.type,
      entityID: this.props.match.params.id,
    });

    this.setState({ data: data });

    if (data) {
      this.loading = false;
    }
  }

  render() {
    let elements = null;

    if (!this.loading) {
      let entity = this.state.data[0];
      let header = entity.name || entity.title;
      let thumbnail = entity.thumbnail;

      elements = (
        <div className="entity-details">
          <MarvelCard
            id={this.props.match.id}
            header={header}
            thumbnail={thumbnail}
          />
          <div className="entity-column-2">
            <p>{entity.description || 'No description available.'}</p>
            <p>Comics: {entity.comics.available}</p>
            <p>Stories: {entity.stories.available}</p>
          </div>
        </div>
      );
    }

    return elements;
  }
}
