import React, { Component } from 'react';
import { Route } from 'react-router';

import MarvelAPI from '../../utils/MarvelAPI';
import MarvelCard from '../MarvelCard';
import MarvelPlot from '../MarvelPlot';

import './MarvelEntityDetails.css';

export default class MarvelEntityDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { data: undefined };
  }

  async componentDidMount() {
    const data = await MarvelAPI.get({
      entity: this.props.match.params.type,
      entityID: this.props.match.params.id,
    });

    this.setState({ data: data });
  }

  render() {
    let elements = null;

    if (this.state.data) {
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
          {/* TODO: pass match as props instead of using Route here? */}
          <Route path="/:type/:id" component={MarvelPlot} />
        </div>
      );
    }

    return elements;
  }
}
