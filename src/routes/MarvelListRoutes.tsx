import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MarvelList from '../components/MarvelList';

export default class MarvelListRoutes extends Component {
  render() {
    const entities: string[] = ['characters', 'events', 'series'];
    const listRoutes = entities.map(entity => {
      const entityPath = '/'.concat(entity);
      return (
        <Route path={entityPath} render={() => <MarvelList type={entity} />} />
      );
    });

    return <div>{listRoutes}</div>;
  }
}
