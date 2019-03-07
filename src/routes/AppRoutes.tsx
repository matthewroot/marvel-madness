import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import MarvelEntityDetails from '../components/MarvelEntityDetails';

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          <Redirect to="/events" />
        </Route>
        <Route path="/characters/:id" component={MarvelEntityDetails} />
      </div>
    );
  }
}
