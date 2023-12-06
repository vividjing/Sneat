import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

function AreaChart2() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [21, 30, 22, 32, 42, 26, 35, 29],
      },
    ],
    options: {
      chart: {
        height: "80%",
        type: "area",
        toolbar: {
          show: false,
          autoSelected: "pan",
        },
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: [currentColor],
      },
      fill: {
        type: "gradient",
        colors: [currentColor],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        show: false,
        type: "month",
        style: {
          colors: ["transparent"],
        },
        axisBorder: { show: false },

        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: {
          show: true,
          style: {
            colors: [currentColor],
          },
        },
      },
      yaxis: {
        labels: { show: false },
        tickAmount: 4,
      },

      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: "#fff",
            strokeColor: currentColor,
            size: 5,
            shape: "circle", // "circle" | "square" | "rect"
          },
        ],
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={"110%"}
      />
    </div>
  );
}

export default AreaChart2;
