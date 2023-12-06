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
            y: [1, 18],
          },
          {
            x: "Feb",
            y: [1, 7],
          },
          {
            x: "Mar",
            y: [1, 15],
          },
          {
            x: "Apr",
            y: [1, 29],
          },
          {
            x: "May",
            y: [1, 18],
          },
          {
            x: "Jun",
            y: [1, 12],
          },
          {
            x: "Jul",
            y: [1, 9],
          },
        ],
      },
      {
        name: "2021",
        data: [
          {
            x: "Jan",
            y: [-13, -1],
          },
          {
            x: "Feb",
            y: [-18, -1],
          },
          {
            x: "Mar",
            y: [-9, -1],
          },
          {
            x: "Apr",
            y: [-14, -1],
          },
          {
            x: "May",
            y: [-5, -1],
          },
          {
            x: "Jun",
            y: [-17, -1],
          },
          {
            x: "Jul",
            y: [-9, -1],
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
      colors: [currentColor, "#03c3ec"],
      plotOptions: {
        bar: {
          horizontal: false,
          rangeBarGroupRows: true,
          columnWidth: "20%",
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
        position: "top",
        horizontalAlign: "left",
        markers: {
          width: 12,
          height: 12,
          radius: 12,
        },
      },
      title: {
        text: "Total Revenue",
        style: {
          color: "#b7bec6",
          fontWeight: "600",
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#b7bec6",
            fontSize: 12,
          },
        },
        type: "month",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
