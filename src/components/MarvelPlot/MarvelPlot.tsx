import React, { Component } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
      this.setState({ yearHisto: Comics.yearlyAppearances(this.state.data) });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    let data = [];

    if (this.state.yearHisto) {
      for (const year in this.state.yearHisto) {
        if (this.state.yearHisto.hasOwnProperty(year)) {
          const appearances = this.state.yearHisto[year];
          data.push({ year: year, appearances: appearances });
        }
      }
    }

    let barChart = (
      <React.Fragment>
        <h2>Yearly Appearances</h2>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="appearances"
            name="Appearances"
            fill="rgba(38, 135, 245, 0.904)"
          />
        </BarChart>
      </React.Fragment>
    );

    return <div>{this.state.yearHisto ? barChart : 'loading'}</div>;
  }
}
