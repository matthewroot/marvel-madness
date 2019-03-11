import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import MarvelEntityDetails from '../components/MarvelEntityDetails';

export default class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect exact to="/characters" />
        </Route>
        <Route exact path="/:type/:id" component={MarvelEntityDetails} />
      </Switch>
    );
  }
}
