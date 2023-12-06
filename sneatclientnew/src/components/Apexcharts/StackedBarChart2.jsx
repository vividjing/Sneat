import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

function StackedBarChart() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData] = useState({
    series: [
      {
        name: "2022",
        data: [
          {
            x: "Jan",
            y: [19, 24],
          },
          {
            x: "Feb",
            y: [14, 18],
          },
          {
            x: "Mar",
            y: [16, 22],
          },
          {
            x: "Apr",
            y: [18, 26],
          },
          {
            x: "May",
            y: [15, 23],
          },
          {
            x: "Jun",
            y: [23, 28],
          },
          {
            x: "Jul",
            y: [17, 27],
          },
        ],
      },
      {
        name: "2021",
        data: [
          {
            x: "Jan",
            y: [1, 18],
          },
          {
            x: "Feb",
            y: [1, 13],
          },
          {
            x: "Mar",
            y: [1, 15],
          },
          {
            x: "Apr",
            y: [1, 17],
          },
          {
            x: "May",
            y: [1, 14],
          },
          {
            x: "Jun",
            y: [1, 22],
          },
          {
            x: "Jul",
            y: [1, 16],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "rangeBar",
        toolbar: {
          show: false,
        },
      },
      colors: [currentColor , "#ff3e1d"],
      plotOptions: {
        bar: {
          horizontal: false,
          rangeBarGroupRows: true,
          columnWidth: "10%",
          barHeight: "70%",
          borderRadius: 5,
          borderRadiusWhenStacked: "all",
          borderRadiusApplication: "around",
        },
      },

      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        show: false,
        axisBorder: { show: false },
        labels: {
          style: {
            colors: "#b7bec6",
            fontSize: 12,
          },
        },
        axisTicks: {
          show: false,
        },
        type: "month",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        show: false,
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="rangeBar"
        width="100%"
        height="200%"
      />
    </div>
  );
}

export default StackedBarChart;
