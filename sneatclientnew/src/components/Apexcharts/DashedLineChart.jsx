import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

const DashedLineChart = () => {
  const { currentColor } = useSelector((state) => state.global);
  const state = {
    series: [
      {
        name: "Session Duration",
        data: [9, 7, 18, 14, 16, 10, 22],
      },
      {
        name: "Page Views",
        data: [16, 5, 10, 7, 9, 4, 6],
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
          autoSelected: "pan",
        },
      },
      colors: [currentColor, "#eff1f2"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 3],
        curve: "smooth",
        dashArray: [0, 5],
      },

      xaxis: {
        axisTicks: {
          show: false,
        },
        show: false,
        axisBorder: { show: false },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
        labels: {
          style: {
            colors: "#b7bec6",
            fontSize: 12,
          },
        },
      },
      yaxis: {
        labels: { show: false },
      },
      grid: {
        show: false,
      },
      markers: {
        strokeWidth: 4,
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 6,
            fillColor: "#fff",
            strokeColor: currentColor,
            size: 6,
            shape: "circle", // "circle" | "square" | "rect"
          },
          {
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: "#fff",
            strokeColor: "#000000",
            size: 6,
            shape: "circle", // "circle" | "square" | "rect"
          },
        ],
      },
      legend: {
        show: false,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height="150%"
      />
    </div>
  );
};

export default DashedLineChart;
