import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import './YearlyAppearancesPlot.css';

export default function YearlyAppearancesPlot({ plotData }: any) {
  return (
    <div className="yearly-appearances-plot">
      <h2>Yearly Appearances</h2>
      <BarChart width={750} height={250} data={plotData}>
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
    </div>
  );
}
