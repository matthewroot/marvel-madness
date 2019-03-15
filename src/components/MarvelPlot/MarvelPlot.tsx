import React, { Component } from 'react';

import Comics from '../../utils/Comics';
import MarvelAPI from '../../utils/MarvelAPI';
import YearlyAppearancesPlot from './YearlyAppearancesPlot';

export default class MarvelPlot extends Component<any, any> {
  loading: boolean;
  mounted: boolean;

  constructor(props: any) {
    super(props);
    // TODO: Extract separate Branch component to handle loading and error rendering
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
      this.setState({
        plotData: this.formatToBarChart(
          Comics.yearlyAppearances(this.state.data)
        ),
      });

      this.loading = false;
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  formatToBarChart(histogram: any) {
    let data = [];

    if (histogram) {
      for (const year in histogram) {
        if (histogram.hasOwnProperty(year)) {
          const appearances = histogram[year];
          data.push({ year: year, appearances: appearances });
        }
      }
    }

    return data;
  }

  render() {
    return (
      <div className="marvel-plot">
        {this.state.plotData ? (
          <YearlyAppearancesPlot {...this.state} />
        ) : (
          // TODO: Extract loading spinner into component and use here
          'loading'
        )}
      </div>
    );
  }
}
