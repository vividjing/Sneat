import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux/es/hooks/useSelector";

function TinyAreaChart() {
  const { currentColor } = useSelector((state) => state.global);
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
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
        show: false,
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
        colors: currentColor,
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
        type: "datetime",
        style: {
          colors: ["transparent"],
        },
        axisBorder: { show: false },

        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: { show: false },
      },
      yaxis: {
        labels: { show: false },
      },
      title: {
        text: "Order",
        offsetX: 30,
        offsetY: 10,
        style: {
          color: "#95a0aa",
          fontWeight: "600",
        },
      },
      subtitle: {
        text: "276K",
        offsetX: 30,
        style: {
          color: "#4d5f71",
          fontWeight: "600",
          fontSize: "18",
        },
      },
      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 6,
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
        height={"100%"}
      />
    </div>
  );
}

export default TinyAreaChart;
