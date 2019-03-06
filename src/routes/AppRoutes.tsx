import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          <Redirect to="/events" />
        </Route>
      </div>
    );
  }
}
