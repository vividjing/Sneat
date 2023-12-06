import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

function DonutChart() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData, setChartData] = useState({
    series: [45, 80, 20, 40],
    options: {
      chart: {
        type: "donut",
        offsetX: 20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          customScale: 0.7,
          donut: {
            size: "75%",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [currentColor, "#696cff", "#8592a3", "#03c3ec"],

      labels: ["Fashion", "Electronic", "sports", "Decor"],
      //   legend: {
      //     position: "center",
      //   },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              margin: 0,
              scale: 0.8,
            },
            legend: {
              position: "center",
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="50%"
        height="100%"
      />
    </div>
  );
}

export default DonutChart;
