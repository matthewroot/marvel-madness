import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MarvelList from '../components/MarvelList';

export default class MarvelListRoutes extends Component {
  render() {
    const entities: string[] = ['characters', 'events', 'series'];
    const listRoutes = entities.map(entity => {
      const entityPath = '/'.concat(entity);
      return (
        <Route exact path={entityPath} component={MarvelList} key={entity} />
      );
    });

    return <Switch>{listRoutes}</Switch>;
  }
}
