import React, { Component } from 'react';

import Comics from '../../utils/Comics';
import MarvelAPI from '../../utils/MarvelAPI';

export default class MarvelPlot extends Component<any, any> {
  loading: boolean;
  mounted: boolean;

  constructor(props: any) {
    super(props);
    this.loading = true;
    this.mounted = false;
    this.state = { data: undefined };
  }

  async componentDidMount() {
    const entity = this.props.match.params.type;
    const id = this.props.match.params.id;
    const subEntity = 'comics';

    this.mounted = true;
    const data = await MarvelAPI.getAll({
      entity: entity,
      entityID: id,
      subEntity: subEntity,
    });

    if (this.mounted) {
      this.setState({ data: data });
    }

    if (this.state.data) {
      this.loading = false;
      const yearHisto = Comics.yearlyAppearances(this.state.data);
      console.log(yearHisto);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div>
        I AM MARVEL PLOT! {this.state.data ? this.state.data.length : 'loading'}
      </div>
    );
  }
}
