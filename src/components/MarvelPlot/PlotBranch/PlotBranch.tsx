import React from 'react';

import YearlyAppearancesPlot from '../YearlyAppearancesPlot';

export default function PlotBranch({ loading, plotData }: any) {
  if (loading) {
    // TODO: Extract loading spinner into component and use here
    return <div>Loading...</div>;
  } else if (plotData) {
    return <YearlyAppearancesPlot plotData={plotData} />;
  } else {
    return <div>Encountered an error!</div>;
  }
}
