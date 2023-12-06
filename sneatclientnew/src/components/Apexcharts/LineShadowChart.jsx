import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

function LineShadowChart() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 20, 41, 34, 38, 37, 36, 35, 37],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        offsetY: 40,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 20,
          left: 2,
          blur: 5,
          color: [currentColor ],
          opacity: 0.4,
        },
      },
      colors: [currentColor ],
      stroke: {
        curve: "smooth",
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height="100%"
      />
    </div>
  );
}

export default LineShadowChart;
