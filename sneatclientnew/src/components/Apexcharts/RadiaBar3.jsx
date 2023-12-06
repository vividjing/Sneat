import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

function RadiaBar3() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData, setChartData] = useState({
    series: [75],
    options: {
      chart: {
        type: "radialBar",
      },
      colors: [currentColor],
      stroke: {
        lineCap: "round",
      },
      title: {
        text: "Sales",
        offsetY: 165,

        align: "center",

        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: currentColor,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
          track: {
            strokeWidth: 40,
          },
          dataLabels: {
            name: {
              show: true,
              color: "#4d5f71",
              fontSize: "30px",
              fontWeight: 500,
            },
            value: { show: false },
          },
        },
      },
      labels: ["75%"],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height="200%"
        width="100%"
      />
    </div>
  );
}

export default RadiaBar3;
