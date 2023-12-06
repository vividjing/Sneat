import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function RadiaBar4() {
  const [chartData, setChartData] = useState({
    series: [38],
    options: {
      chart: {
        type: "radialBar",
      },
      colors: ["#03c3ec"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "30%",
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
