import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function RadiaBar4() {
  const [chartData, setChartData] = useState({
    series: [81],
    options: {
      chart: {
        type: "radialBar",
      },
      colors: ["#ff3e1d"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "25%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: { show: false },
          },
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        width="50%"
      />
    </div>
  );
}

export default RadiaBar4;
