import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

function RadiaBar2() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData, setChartData] = useState({
    series: [70],
    options: {
      chart: {
        type: "radialBar",
      },
      colors: [currentColor],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "45%",
          },
          dataLabels: {
            name: {
              show: true,
              color: currentColor,
              fontSize: "12px",
              offsetY: 5,
            },
            value: { show: false },
          },
        },
      },
      labels: ["6.5K"],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height="65%"
        width="30%"
      />
    </div>
  );
}

export default RadiaBar2;
